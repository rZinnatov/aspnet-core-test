using ATQB.WebApp.Util.Connectors.AT;
using ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1;
using ATQB.WebApp.Util.Exceptions;
using ATQB.WebApp.Util.Extensions;
//using Swashbuckle.SwaggerGen.Annotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

using AtAuthModel = ATQB.WebApp.Models.AT.Auth;
using AtConnectorFactory = ATQB.WebApp.Util.Factories.AtConnectorFactory;
using AtConnectorProviderService = ATQB.WebApp.Util.Services.AtConnectorProviderService;

namespace ATQB.WebApp.Controllers.Api.v1
{
    // TODO: Refact candidate
    [Route("/api/v1/auth")]
    public class AuthController : Controller
    {
        private AtConnectorFactory _actiTimeFactory;
        private AtConnectorProviderService _actiTimeProvider;
        private ILogger<AuthController> _logger;

        public AuthController(
            AtConnectorFactory actiTimeFactory,
            AtConnectorProviderService actiTimeProvider,
            ILogger<AuthController> logger
        ) {
            _actiTimeFactory = actiTimeFactory;
            _actiTimeProvider = actiTimeProvider;
            _logger = logger;
        }
        
        [HttpPost("at")]
        //[SwaggerResponse(System.Net.HttpStatusCode.OK, Type = typeof(Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary))]
        public async Task<IActionResult> At([FromBody] AtAuthModel model)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Auth/At: Invalid model.");
                return new JsonResult(ModelState)
                {
                    StatusCode = (int)System.Net.HttpStatusCode.BadRequest
                };
            }

            UserInfo currentUser = null;
            IAtConnector actiTime = null;
            var httpStatusCode = System.Net.HttpStatusCode.OK;
            try
            {
                actiTime = _actiTimeFactory.Build(model.ActiTimeUrl);
                if (actiTime == null)
                {
                    throw new Exception("Cannot instantiate AT Connector");
                }

                currentUser = await actiTime.Login(model.UserName, model.Password);
                if (currentUser == null)
                {
                    throw new Exception("Cannot login to AT. Current user is null.");
                }
            }
            // TODO: Refact catch blocks
            catch (LoginFailedException)
            {
                _logger.LogWarning("Auth/At: Wrong credentials.");

                ModelState.AddModelError(nameof(model.Password), "Wrong credentials");

                httpStatusCode = System.Net.HttpStatusCode.Unauthorized;
            }
            catch (BadUrlException ex)
            {
                _logger.LogWarning($"Auth/At: {ex.Message}.");

                ModelState.AddModelError(nameof(model.ActiTimeUrl), ex.Message);

                httpStatusCode = System.Net.HttpStatusCode.BadRequest;
            }
            catch(AtConnectorException ex)
            {
                _logger.LogCritical("Auth/At: actiTIME error.", ex);

                // <-- TODO: refact this -->
                var userMessage = ex.AtErrorCode == 490 ? ": Wrong permissions" : "";
                // </- refact this -->

                ModelState.AddModelError(nameof(model.ActiTimeUrl), $"actiTIME error{userMessage}");

                httpStatusCode = System.Net.HttpStatusCode.InternalServerError;
            }
            catch (System.Net.Http.HttpRequestException ex)
            {
                _logger.LogCritical("Auth/At: Error while communicating with actiTIME.", ex);

                // TODO: Process all possible HttpException StatusCodes. HttpException message could be not user friendly.
                ModelState.AddModelError(nameof(model.ActiTimeUrl), "actiTIME Server url not found");

                httpStatusCode = System.Net.HttpStatusCode.NotFound;
            }
            catch (Exception ex)
            {
                _logger.LogCritical("Auth/At: Unknown error.", ex);

                ModelState.AddModelError(nameof(model.ActiTimeUrl), $"Unknown error");

                httpStatusCode = System.Net.HttpStatusCode.InternalServerError;
            }


            if (ModelState.IsValid)
            {
                _logger.LogInformation("Auth/At: AT login - Success.");

                _actiTimeProvider.SetActiTime(actiTime);
                HttpContext.Session.SetCurrentUser(currentUser);

                // TODO: Create model class for return value (success, redirectTo and etc.)
                return Json(new { success = true });
            }


            _logger.LogInformation("Auth/At: AT login - Fail.");
            return new JsonResult(ModelState)
            {
                StatusCode = (int)httpStatusCode
            };
        }
    }
}
