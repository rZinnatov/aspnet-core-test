using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.Swagger.Annotations;
using ATQB.WebApp.Util.Connectors.AT;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/time-track")]
    public class TimeTrackController : Controller
    {
        private IAtConnector _actiTime;


        public TimeTrackController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var timetrack = await _actiTime.GetTimeTrackData(DateTime.Parse("2016.01.01"), DateTime.Parse("2016.03.01"), null, null, false);

            return Json(timetrack);
        }
    }
}
