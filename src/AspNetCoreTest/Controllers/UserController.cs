using AspNetCoreTest.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreTest.Controllers
{
    public class UserController : Controller
    {
        [HttpPost]
        [Route("api/users")]
        public IActionResult Post([FromBody]User newUser)
        {
            return Json(newUser);
        }
    }
}
