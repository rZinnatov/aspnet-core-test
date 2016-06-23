using ATQB.WebApp.Models.QB;
using ATQB.WebApp.Util.Connectors.QB;
using Intuit.Ipp.Data;
using Microsoft.AspNetCore.Mvc;
//using Swashbuckle.SwaggerGen.Annotations;
using System.Collections.Generic;
using System.Linq;

namespace ATQB.WebApp.Controllers
{
    [Route("/api/v1/service-items")]
    public class ServiceItemsController : Controller
    {
        private IQbConnector _quickBooks;

        public ServiceItemsController(IQbConnector quickBooks)
        {
            _quickBooks = quickBooks;
        }


        [HttpGet]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(IEnumerable<Item>))]
        public IActionResult Index()
        {
            var qbServiceItems = _quickBooks.GetAllItems();
            
            // <-- TODO: Use AutoMapper -->
            var serviceItems = qbServiceItems.Select(serviceItem => new ServiceItem
            {
                Id = serviceItem.Id,
                Name = serviceItem.Name
            });
            // </- Use AutoMapper -->

            return Json(serviceItems);
        }
    }
}
