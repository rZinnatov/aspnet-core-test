using ATQB.WebApp.Models.Import;
using ATQB.WebApp.Models.Import.Prepare;
using ATQB.WebApp.Models.Import.Mapping;
using ATQB.WebApp.Util.Enums;
using ATQB.WebApp.Util.Extensions;
using ATQB.WebApp.Util.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
//using Swashbuckle.SwaggerGen.Annotations;
using System;
using System.Threading.Tasks;

using AtUserInfo = ATQB.WebApp.Models.AT.UserInfo;
using AtLeaveType = ATQB.WebApp.Models.AT.LeaveType;
using AtTypeOfWork = ATQB.WebApp.Models.AT.TypeOfWork;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/import")]
    public class ImportController : Controller
    {
        private ImportService _importService;
        private Models.MappingRules _mappingRules;
        private ILogger<ImportController> _logger;


        public ImportController(
            ImportService importService,
            MappingRulesService mappingRulesService,
            ILogger<ImportController> logger
        ) {
            _importService = importService;
            _mappingRules = mappingRulesService.GetMappingRules();
            _logger = logger;
        }


        [HttpPost("diff")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(ImportInfo))]
        public async Task<IActionResult> Diff([FromBody] PrepareImport model)
        {
            // TODO: Check for every property is not null
            if (!ModelState.IsValid)
            {
                throw new Exception("Wrong input parameters");
            }

            var importInfo = await _importService.ComputeImportDiff(model, _mappingRules);

            return Json(importInfo);
        }

        [HttpGet("create")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(CreateImport))]
        public IActionResult Create()
        {
            var currentUser = HttpContext.Session.GetCurrentUser();

            var startImportModel = _importService.CreateImport(currentUser.Id);

            return Json(startImportModel);
        }
        
        [HttpPost("users")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportUsers([FromBody] Map<AtUserInfo> mapUsers)
        {
            var result = true;
            try
            {
                result = await _importService.ImportUsers(mapUsers);
            }
            catch (Exception ex)
            {
                _logger.LogError("Import: Import users error.", ex);
            }

            return Json(new Models.ResultInfo { Result = result });
        }
        [HttpPost("types-of-work")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportTypesOfWork([FromBody] Map<AtTypeOfWork> workTypesMap)
        {
            var result = await _importService.ImportTypesOfWork(workTypesMap);

            return Json(new Models.ResultInfo { Result = result });
        }
        [HttpPost("leave-types")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportLeaveTypes([FromBody] Map<AtLeaveType> leaveTypesMap)
        {
            var result = await _importService.ImportLeaveTypes(leaveTypesMap);

            return Json(new Models.ResultInfo { Result = result });
        }
        [HttpPost("tasks")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportTasks([FromBody] Map<Models.Import.Task> tasksMap)
        {
            if (_mappingRules.QbCustomersImportFrom == QbCustomersImportFrom.Customers &&
                _mappingRules.IsQbSubCustomersImported)
            {
                throw new InvalidOperationException("Wrong MappingRules state");
            }

            var result = await _importService.ImportTasks(tasksMap.Items);

            return Json(new Models.ResultInfo { Result = result });
        }
        [HttpPost("tasks-full-map")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportTasksFullMap([FromBody] Map<Models.Import.Task, Models.Import.Task> tasksMap)
        {
            if (_mappingRules.QbCustomersImportFrom == QbCustomersImportFrom.Projects ||
                !_mappingRules.IsQbSubCustomersImported)
            {
                throw new InvalidOperationException("Wrong MappingRules state");
            }

            var result = await _importService.ImportTasks(tasksMap);

            return Json(new Models.ResultInfo { Result = result });
        }
        [HttpPost("time-track")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.ResultInfo))]
        public async Task<IActionResult> ImportTimeTrack([FromBody] ImportTT model)
        {
            var result = await _importService.ImportTimeTrack(model);

            return Json(new Models.ResultInfo { Result = result });
        }
    }
}
