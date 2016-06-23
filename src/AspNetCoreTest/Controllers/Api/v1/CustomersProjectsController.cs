using ATQB.WebApp.Models.AT;
using ATQB.WebApp.Util.Connectors.AT;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/customers-projects")]
    public class CustomersProjectsController : Controller
    {
        private IAtConnector _actiTime;

        public CustomersProjectsController(IAtConnector actiTime)
        {
            _actiTime = actiTime;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Models.CustomersProjects))]
        public async Task<IActionResult> Get()
        {
            var customersProjects = await _actiTime.GetCustomersProjects();

            var projects = customersProjects.Projects
                // TODO: Use AutoMapper
                .Select(p => new Project
                {
                    Id = p.Id,
                    CustomerId = p.CustomerId,
                    Name = p.Name,
                    Archived = p.Archived
                })
            ;
            var customers = customersProjects.Customers
                // TODO: Use AutoMapper
                .Select(c => new Customer
                {
                    Id = c.Id,
                    Name = c.Name,
                    Archived = c.Archived
                })
            ;

            return Json(new Models.CustomersProjects
            {
                Projects = projects,
                Customers = customers
            });
        }
    }
}
