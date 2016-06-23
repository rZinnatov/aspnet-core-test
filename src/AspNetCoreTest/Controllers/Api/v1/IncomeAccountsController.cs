using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ATQB.WebApp.Util.Connectors.QB;
//using Swashbuckle.SwaggerGen.Annotations;
using ATQB.WebApp.Models.QB;
using System.Linq;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/income-accounts")]
    public class IncomeAccountsController : Controller
    {
        private IQbConnector _quickBooks;

        public IncomeAccountsController(IQbConnector quickBooks)
        {
            _quickBooks = quickBooks;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<IncomeAccount>))]
        public IActionResult Index()
        {
            var qbIncomeAccounts = _quickBooks.GetAllIncomeAccounts();

            // <-- TODO: Use AutoMapper -->
            var customers = qbIncomeAccounts.Select(c => new IncomeAccount
            {
                Id = c.Id,
                Name = c.Name
            });
            // <-- Use AutoMapper -->

            return Json(customers);
        }
    }
}
