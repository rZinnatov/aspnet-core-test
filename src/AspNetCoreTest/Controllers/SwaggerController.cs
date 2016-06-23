using Microsoft.AspNetCore.Mvc;

namespace ATQB.WebApp.Controllers
{
    public class SwaggerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
