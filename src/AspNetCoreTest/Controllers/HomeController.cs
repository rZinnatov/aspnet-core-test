using ATQB.WebApp.Util.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace ATQB.WebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            if (!HttpContext.Session.IsAtAuthenticated())
            {
                return RedirectToAction("At", "Auth");
            }

            if (!HttpContext.Session.IsQbAuthenticated())
            {
                return RedirectToAction("Qb", "Auth");
            }

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
