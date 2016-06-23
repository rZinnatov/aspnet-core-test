using Microsoft.AspNetCore.Mvc;
using ATQB.WebApp.Util.Connectors.AT;
//using Swashbuckle.SwaggerGen.Annotations;
using ATQB.WebApp.Util.Extensions;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/info")]
    public class InfoController : Controller
    {
        private IAtConnector _actiTime;

        public InfoController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }

        [HttpGet("current-user")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Util.Connectors.AT.Data.QbServiceV1.UserInfo))]
        public IActionResult CurrentUser()
        {
            return Json(
                HttpContext.Session.GetCurrentUser()
            );
        }

        [HttpGet("at-url")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.Info.AtUrlInfo))]
        public IActionResult AtUrl()
        {
            return Json(new Models.Info.AtUrlInfo
            {
                AtUrl = _actiTime.Url.ToAtqbString()
            });
        }
    }
}
