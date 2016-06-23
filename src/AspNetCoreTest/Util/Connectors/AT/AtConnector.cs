using ATQB.WebApp.Util.Connectors.AT.Data;
using ATQB.WebApp.Util.Connectors.AT.Enums;
using ATQB.WebApp.Util.Exceptions;
using ATQB.WebApp.Util.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using IHttpService = ATQB.WebApp.Util.Services.IHttpService;

namespace ATQB.WebApp.Util.Connectors.AT
{
    public class AtConnector : IAtConnector
    {
        private Data.LoginService.Login _login;
        private Data.QbServiceV1.UserInfo _currentUser;
        private IHttpService _httpService;
        
        public bool IsAuthenticated { get { return _login != null; } }
        public Uri Url { get { return _httpService?.Url; } }

        public AtConnector(IHttpService httpService)
        {
            _login = null;
            _httpService = httpService;
        }

        public async Task<Data.QbServiceV1.UserInfo> Login(string userName, string password)
        {
            if (IsAuthenticated)
            {
                return await GetCurrentUser();
            }

            if (_httpService == null)
            {
                throw new InvalidOperationException("HttpService is null");
            }

            // <-- Get Challenge -->
            var challengeResult = await _httpService.Post<Data.LoginService.Challenge>(
                new Request(ActiTimeRpcMethods.GetChallenge)
            );
            var challengeValue = challengeResult.Result.ChallengeValue;
            // </- Get Challenge -->


            var hash = _ComputeHash(userName, password, challengeValue);


            // <-- Login -->
            var loginResult = await _httpService.Post<Data.LoginService.Login>(
                new Request(
                    ActiTimeRpcMethods.Login,
                    new string[] { userName,  hash }
                )
            );
            // </- Login -->

            if (loginResult.Result.ResultCode != "ok")
            {
                throw new LoginFailedException();
            }
            _login = loginResult.Result;

            return await GetCurrentUser();
        }
        public async Task Logout()
        {
            _ThrowIfUnAuthorize();

            _login = null;
            _currentUser = null;

            await _httpService.Post<object>(
                new Request(ActiTimeRpcMethods.Logout)
            );

            _httpService.Dispose();
            _httpService = null;
        }

        public async Task<Data.QbServiceV1.UserInfo> GetCurrentUser()
        {
            if (_currentUser != null)
            {
                return _currentUser;
            }
            
            _ThrowIfUnAuthorize();

            var userInfos = await _httpService.Post<Data.QbServiceV1.UserInfoWithDuplicatesResult>(
                new Request(
                    ActiTimeRpcMethods.GetUsersInfoWithDuplicates,
                    new object[] { new int[] { _login.UserId } }
                )
            );

            var userId = _login.UserId.ToString();
            if (userInfos.Result.Map.ContainsKey(userId))
            {
                _currentUser = userInfos.Result.Map[userId].UserInfo;
                return _currentUser;
            }

            throw new AtConnectorException($"UserId {userId} was not present in users list");
        }
        public async Task<IEnumerable<Data.QbServiceV1.UserInfo>> GetUsersToImport(DateTime startDate, DateTime endDate)
        {
            _ThrowIfUnAuthorize();

            var userIdsResult = await _httpService.Post<int[]>(
                new Request(
                    ActiTimeRpcMethods.GetUsersToImport,
                    new object[] { startDate.ToAtApiString(), endDate.ToAtApiString() }
                )
            );

            var userInfosResult = await _httpService.Post<Data.QbServiceV1.UserInfoWithDuplicatesResult>(
                new Request(
                    ActiTimeRpcMethods.GetUsersInfoWithDuplicates,
                    new object[] { userIdsResult.Result }
                )
            );

            return userInfosResult.Result.Map.Select(u => u.Value.UserInfo);
        }
        public async Task<Data.QbIntegratorV1.TimeTrack> GetTimeTrackData(
            DateTime startDate,
            DateTime endDate,
            IEnumerable<int> projectIds,
            IEnumerable<int> userIds,
            bool isApprovedOnly
        ) {
            _ThrowIfUnAuthorize();

            var timeTrackResult = await _httpService.Post<Data.QbIntegratorV1.TimeTrack>(
                new Request(
                    ActiTimeRpcMethods.GetTimeTrackData,
                    new object[] {
                        startDate.ToAtApiString(),
                        endDate.ToAtApiString(),
                        projectIds.ToArray(),
                        userIds.ToArray(),
                        isApprovedOnly
                    }
                )
            );

            return timeTrackResult.Result;
        }

        public async Task<Data.QbIntegratorV1.UserSelectorData> GetUsers()
        {
            _ThrowIfUnAuthorize();
            
            var usersResult = await _httpService.Post<Data.QbIntegratorV1.UserSelectorData>(
                new Request(ActiTimeRpcMethods.GetUsers)
            );

            return usersResult.Result;
        }
        public IEnumerable<Data.QbServiceV1.LeaveType> GetLeaveTypes()
        {
            return new Data.QbServiceV1.LeaveType[]
            {
                new Data.QbServiceV1.LeaveType { Id = 0, Name = "LeaveType0" },
                new Data.QbServiceV1.LeaveType { Id = 1, Name = "LeaveType1" },
                new Data.QbServiceV1.LeaveType { Id = 2, Name = "LeaveType2" }
            };
        }
        public IEnumerable<Data.QbServiceV1.TypeOfWork> GetTypesOfWork()
        {
            return new Data.QbServiceV1.TypeOfWork[]
            {
                new Data.QbServiceV1.TypeOfWork { Id = 0, Name = "TypeOfWork0" },
                new Data.QbServiceV1.TypeOfWork { Id = 1, Name = "TypeOfWork1" },
                new Data.QbServiceV1.TypeOfWork { Id = 2, Name = "TypeOfWork2" }
            };
        }
        public async Task<Data.QbIntegratorV1.CustomersProjectsResult> GetCustomersProjects()
        {
            _ThrowIfUnAuthorize();
            
            var customersProjectsResult = await _httpService.Post<Data.QbIntegratorV1.CustomersProjectsResult>(
                new Request(ActiTimeRpcMethods.GetCustomersProjects)
            );

            return customersProjectsResult.Result;
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_httpService != null)
                {
                    _httpService.Dispose();
                    _httpService = null;
                }
            }
        }


        private void _ThrowIfUnAuthorize()
        {
            if (!IsAuthenticated)
            {
                throw new UnauthorizeException();
            }
        }

        private string _ComputeHash(string userName, string password, string challengeValue)
        {
            return _ComputeHash($"{_ComputeHash(password)}{challengeValue}{userName.ToLower()}");
        }
        private string _ComputeHash(string input)
        {
            var inputBytes = System.Text.Encoding.UTF8.GetBytes(input);

            var hexCharacters = System.Security.Cryptography.MD5.Create()
                .ComputeHash(inputBytes)
                .Select(b => b.ToString("x2"))
            ;

            return string.Join("", hexCharacters);
        }
    }
}
