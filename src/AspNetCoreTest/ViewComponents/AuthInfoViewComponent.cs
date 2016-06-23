using ATQB.WebApp.Models;
using ATQB.WebApp.Util.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace ATQB.WebApp.ViewComponents
{
    [ViewComponent(Name = "AuthInfo")]
    public class AuthInfoViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View(new AuthInfo
            {
                AtUser = HttpContext.Session.GetCurrentUser(),
                IsQbConnected = HttpContext.Session.IsQbAuthenticated()
            });
        }
    }
}
