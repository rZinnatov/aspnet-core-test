using ATQB.WebApp.Models;
using ATQB.WebApp.Util.Connectors.AT;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ATQB.WebApp.Util.Services
{
    public class AtConnectorTestService
    {
        private IAtConnector _actiTime;

        public AtConnectorTestService(IAtConnector atConnector)
        {
            _actiTime = atConnector;
        }


        public Test Test()
        {
            var tests = new List<Test>();

            tests.Add(LoginTest());
            tests.Add(GetAllUsersTest());

            // <-- Tests result -->
            var sdkTestResult = Models.Test.TestResults.Passed;
            if (tests.Any(t => t.Result == Models.Test.TestResults.Fail))
            {
                sdkTestResult = Models.Test.TestResults.Fail;
            }
            // </- Tests result -->

            // <-- Test message -->
            var message = "";
            if (sdkTestResult == Models.Test.TestResults.Passed)
            {
                message = "Ok";
            }
            else
            {
                var failedTest = tests.First(t => t.Result == Models.Test.TestResults.Fail);
                message = $"{failedTest.Name}: {failedTest.Message}";
            }
            // </- Test message -->

            return new Test(
                "actiTime tests",
                message,
                sdkTestResult,
                tests
            );
        }


        private Test LoginTest()
        {
            var loginTask = _actiTime.Login("admin", "_Password1900");
            loginTask.Wait();

            if (loginTask.Exception != null)
            {
                throw loginTask.Exception;
            }

            var login = loginTask.Result;

            // TODO: Find proper way to test AT Login

            //if (login.ResultCode != "ok")
            //{
            //    return new Test("Login", $"ResultCode = {login.ResultCode}", Models.Test.TestResults.Fail);
            //}

            return new Test("actiTime", "Ok", Models.Test.TestResults.Passed);
        }
        private Test GetAllUsersTest()
        {
            var getUsersToImportTask = _actiTime.GetUsersToImport(
                DateTime.Parse("2016-02-01"),
                DateTime.Parse("2016-02-10")
            );
            getUsersToImportTask.Wait();

            if (getUsersToImportTask.Exception != null)
            {
                throw getUsersToImportTask.Exception;
            }

            var usersToImport = getUsersToImportTask.Result;

            return new Test("actiTime", "Ok", Models.Test.TestResults.Passed);
        }
    }
}
