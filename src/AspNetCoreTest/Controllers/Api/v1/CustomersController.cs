using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ATQB.WebApp.Util.Connectors.QB;
//using Swashbuckle.SwaggerGen.Annotations;
using ATQB.WebApp.Models.QB;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/customers")]
    public class CustomersController : Controller
    {
        private IQbConnector _quickBooks;

        public CustomersController(IQbConnector quickBooks)
        {
            _quickBooks = quickBooks;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Customer>))]
        public IActionResult Index()
        {
            var qbCustomers = _quickBooks.GetAllCustomers();

            // <-- TODO: Use AutoMapper -->
            var customers = qbCustomers.Select(c => new Customer
            {
                Id = c.Id,
                Name = c.DisplayName, // TODO: Choose the way of constructing the name
                ParentId = c.ParentRef?.Value, // TODO: DISCUSS: Should we leave it null?
                IsSubCustomer = c.Job
            });
            // <-- Use AutoMapper -->

            return Json(customers);
        }
    }
}
