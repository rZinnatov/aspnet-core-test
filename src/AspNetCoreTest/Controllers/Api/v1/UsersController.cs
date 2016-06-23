using ATQB.WebApp.Util.Connectors.AT;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ATQB.WebApp.Controllers.Api.v1
{
    [Route("/api/v1/users")]
    public class UsersController : Controller
    {
        private IAtConnector _actiTime;

        public UsersController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Util.Connectors.AT.Data.QbIntegratorV1.UserSelectorData>))]
        public async Task<IActionResult> Index()
        {
            return Json(
                await _actiTime.GetUsers()
            );
        }
    }
}
