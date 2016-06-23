using ATQB.WebApp.Util.Connectors.AT;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using System.Collections.Generic;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/types-of-work")]
    public class TypesOfWorkController : Controller
    {
        private IAtConnector _actiTime;

        public TypesOfWorkController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Util.Connectors.AT.Data.QbServiceV1.TypeOfWork>))]
        public IActionResult Index()
        {
            return Json(
                _actiTime.GetTypesOfWork()
            );
        }
    }
}
