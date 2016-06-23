using System.Threading.Tasks;
using System;
using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT
{
    public interface IAtConnector : IDisposable
    {
        Uri Url { get; }
        bool IsAuthenticated { get; }

        Task Logout();
        Task<Data.QbServiceV1.UserInfo> Login(string userName, string password);
        Task<Data.QbServiceV1.UserInfo> GetCurrentUser();

        Task<Data.QbIntegratorV1.UserSelectorData> GetUsers();
        Task<Data.QbIntegratorV1.CustomersProjectsResult> GetCustomersProjects();
        Task<Data.QbIntegratorV1.TimeTrack> GetTimeTrackData(
            DateTime startDate, 
            DateTime endDate,
            IEnumerable<int> projectIds,
            IEnumerable<int> userIds,
            bool isApprovedOnly
        );


        // <-- TODO: More likely is deprecated -->
        Task<IEnumerable<Data.QbServiceV1.UserInfo>> GetUsersToImport(DateTime startDate, DateTime endDate);
        // <-- More likely is deprecated -->

        // <-- TODO: More likely should be removed -->
        IEnumerable<Data.QbServiceV1.LeaveType> GetLeaveTypes();
        IEnumerable<Data.QbServiceV1.TypeOfWork> GetTypesOfWork();
        // <-- More likely should be removed -->
    }
}