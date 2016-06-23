using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using ATQB.WebApp.Util.Services;
using System.Threading.Tasks;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/mapping-rules")]
    public class MappingRulesController : Controller
    {
        private MappingRulesService _mappingRulesService;


        public MappingRulesController(MappingRulesService mappingRulesService)
        {
            _mappingRulesService = mappingRulesService;
        }


        [HttpGet("is-done")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public IActionResult IsDone()
        {
            return Json(new Models.ResultInfo
            {
                Result = _mappingRulesService.IsDone()
            });
        }

        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.MappingRules))]
        public IActionResult Get()
        {
            return Json(
                _mappingRulesService.GetMappingRules()
            );
        }

        [HttpPost]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> Post([FromBody] Models.MappingRules model)
        {
            var result = await _mappingRulesService.SetMappingRules(model);

            return Json(new Models.ResultInfo
            {
                Result = result
            });
        }
    }
}
