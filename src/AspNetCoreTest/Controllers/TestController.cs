using ATQB.WebApp.Models;
using ATQB.WebApp.Util.Connectors.AT;
using ATQB.WebApp.Util.Connectors.QB;
using ATQB.WebApp.Util.Extensions;
using ATQB.WebApp.Util.Services;
using ATQB.WebApp.Util.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace ATQB.WebApp.Controllers
{
    public class TestController : Controller
    {
        private IAtConnector _actiTime;
        private IQbConnector _quickBooks;
        private SdkTestService _sdkTestService;
        private QbConnectorSettings _qbConnectorSettings;
        private AtConnectorTestService _atConnectorTestService;

        public TestController(
            IAtConnector actiTime,
            IQbConnector quickBooks,
            IOptions<QbConnectorSettings> qbConnectorSettings)
        {
            _actiTime = actiTime;
            _quickBooks = quickBooks;

            _sdkTestService = null;
            _qbConnectorSettings = qbConnectorSettings.Value;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Connectors()
        {
            var qbAuthModel = HttpContext.Session.GetQbAuthModel();

            if (qbAuthModel == null)
            {
                return View(new Test("Initializing", "No AuthModel", Test.TestResults.Fail));
            }

            _quickBooks.Initialize(qbAuthModel, _qbConnectorSettings.PathToLogLocation);
            _sdkTestService = new SdkTestService(_quickBooks);
            
            _atConnectorTestService = new AtConnectorTestService(_actiTime);

            var tests = new List<Test>();
            tests.Add(_sdkTestService.Test());
            tests.Add(_atConnectorTestService.Test());

            // <-- Tests result -->
            var testsResult = Test.TestResults.Passed;
            if (tests.Any(t => t.Result == Test.TestResults.Fail))
            {
                testsResult = Test.TestResults.Fail;
            }
            // </- Tests result -->

            // <-- Test message -->
            var message = "";
            if (testsResult == Test.TestResults.Passed)
            {
                message = "Ok";
            }
            else
            {
                var failedTest = tests.First(t => t.Result == Test.TestResults.Fail);
                message = $"{failedTest.Name}: {failedTest.Message}";
            }
            // </- Test message -->


            return View(new Test(
                "Test root",
                message,
                testsResult,
                tests
            ));
        }
    }
}
