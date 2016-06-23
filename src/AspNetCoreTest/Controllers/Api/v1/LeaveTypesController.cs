using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ATQB.WebApp.Util.Connectors.AT;
//using Swashbuckle.SwaggerGen.Annotations;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/leave-types")]
    public class LeaveTypesController : Controller
    {
        private IAtConnector _actiTime;

        public LeaveTypesController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Util.Connectors.AT.Data.QbServiceV1.LeaveType>))]
        public IActionResult Index()
        {
            return Json(
                _actiTime.GetLeaveTypes()
            );
        }
    }
}
