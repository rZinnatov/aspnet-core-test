using ATQB.WebApp.Models.QB;
using ATQB.WebApp.Util.Connectors.QB;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using System.Collections.Generic;
using System.Linq;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/employees")]
    public class EmployeesController : Controller
    {
        private IQbConnector _quickBooks;

        public EmployeesController(IQbConnector quickBooks)
        {
            _quickBooks = quickBooks;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Employee>))]
        public IActionResult Index()
        {
            var qbEmployees = _quickBooks.GetAllEmployees();

            // <-- TODO: Use AutoMapper -->
            var employees = qbEmployees.Select(employee => new Employee
            {
                Id = employee.Id,
                FirstName = employee.GivenName,
                LastName = employee.FamilyName,
                MiddleInitial = employee.MiddleName
            });
            // <-- Use AutoMapper -->

            return Json(employees);
        }
    }
}
