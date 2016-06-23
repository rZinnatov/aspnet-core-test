using ATQB.DAL.Connection;
using ATQB.WebApp.Models;
using ATQB.WebApp.Util.Connectors.AT;
using ATQB.WebApp.Util.Connectors.QB;
using ATQB.WebApp.Util.Enums;
using ATQB.WebApp.Util.Extensions;
using ATQB.WebApp.Util.ModelBinders;
using ATQB.WebApp.Util.Services;
using ATQB.WebApp.Util.Settings;
using DevDefined.OAuth.Framework;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Threading.Tasks;

using AtAuthModel = ATQB.WebApp.Models.AT.Auth;
using QbAuthModel = ATQB.WebApp.Models.QB.Auth;

namespace ATQB.WebApp.Controllers
{
    // TODO: Refact candidate
    [Route("/auth")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class AuthController : Controller
    {
        public const int QB_TOKENS_EXPIRED_DAYS = 155;

        private IConnection _db;
        private AtConnectorProviderService _actiTimeProvider;
        private IQbConnector _quickBooks;
        private OAuthSettings _oAuthSettings;
        private QbConnectorSettings _qbConnectorSettings;
        private ILogger<HomeController> _logger;

        public AuthController(
            IConnection db,
            AtConnectorProviderService actiTimeProvider,
            IQbConnector quickBooks,
            IOptions<OAuthSettings> oAuthSettings,
            IOptions<QbConnectorSettings> qbConnectorSettings,
            ILogger<HomeController> logger
        )
        {
            _db = db;
            _actiTimeProvider = actiTimeProvider;
            _quickBooks = quickBooks;
            _oAuthSettings = oAuthSettings.Value;
            _qbConnectorSettings = qbConnectorSettings.Value;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return RedirectToActionPermanent(nameof(At));
        }

        [HttpGet("at")]
        public IActionResult At()
        {
            if (HttpContext.Session.IsAtAuthenticated())
            {
                return RedirectToAction("Qb");
            }

            return View(new AtAuthModel());
        }

        [HttpGet("qb")]
        public IActionResult Qb()
        {
            // <-- Preconditions -->
            if (!HttpContext.Session.IsAtAuthenticated())
            {
                return RedirectToAction("At");
            }
            if (HttpContext.Session.IsQbAuthenticated())
            {
                return RedirectToRoute(new { controller = "Home", action = "Index" });
            }
            // </- Preconditions -->

            // <-- Check for stored auth info -->
            QbAuthModel authModel = null;
            try
            {
                authModel = RestoreAuthInfo();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
            }
            // </- Check for stored auth info -->

            if (authModel == null)
            {
                var atUserInfo = HttpContext.Session.GetCurrentUser();
                return View(atUserInfo);
            }

            HttpContext.Session.SetQbAuthModel(authModel);
            InitializeQbConnector(authModel);

            return Redirect("/");
        }

        [HttpGet("qbo")]
        public IActionResult Qbo()
        {
            // 1. Init
            var oAuthService = new OAuthService(_oAuthSettings);

            // 2. Get RequestToken
            var requestToken = oAuthService.GetRequestToken();
            HttpContext.Session.SetRequestToken(requestToken);

            // 3. Redirect to QBO for auth confirmation
            return Redirect(oAuthService.GetAuthorizationLink(requestToken));
        }
        [HttpGet("qbo-callback")]
        public async Task<IActionResult> QboCallback(
            OAuthCallback model,
            [ModelBinder(BinderType = typeof(OAuthRequestTokenModelBinder), Name = ModelNames.RequestToken)] IToken requestToken
        )
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Callback: Wrong OAuth parameters");
            }

            // 4. Get AccessToken
            var oAuthService = new OAuthService(_oAuthSettings);
            var accessToken = oAuthService.GetAccessToken(requestToken, model.OAuth_Verifier);

            if (!oAuthService.IsAuthorized())
            {
                throw new Exception("Callback: OAuth authorize fail");
            }

            // 5. Build AuthModel
            var authModel = new QbAuthModel(
                oAuthService.Settings.AppToken,
                oAuthService.Settings.ConsumerKey,
                oAuthService.Settings.ConsumerSecret,
                accessToken.Token,
                accessToken.TokenSecret,
                model.RealmId
            );

            HttpContext.Session.SetQbAuthModel(authModel);
            try
            {
                await StoreAuthInfo(authModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
            }

            InitializeQbConnector(authModel);

            return Redirect("/");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            _actiTimeProvider.GetActiTime().Logout();

            HttpContext.Session.ClearAuthInfo();

            return Redirect("/");
        }
        [HttpGet("qb-disconnect")]
        public IActionResult QbDisconnect()
        {
            HttpContext.Session.ClearQbAuthInfo();

            HttpContext.Response.Cookies.Remove(CookiesKeys.QbAuth.ToString());

            return Redirect("/");
        }


        private async Task StoreAuthInfo(QbAuthModel authModel)
        {
            // <-- Add or Update DB -->
            var atUrl = _actiTimeProvider.GetActiTime().Url.ToAtqbDbString();
            var authToken = _db.AuthTokenRepository.GetAll()
                .SingleOrDefault(a => a.AtUrl == atUrl)
            ;
            if (authToken == null)
            {
                _db.AuthTokenRepository.Add(
                    new DAL.Entities.AuthToken(atUrl, authModel.RealmId)
                );
            }
            else
            {
                authToken.QbCompanyId = authModel.RealmId;
            }
            await _db.Save();
            // </- Add or Update DB -->

            // <-- Add Cookie -->
            var expiredDate = DateTime.Now.AddDays(QB_TOKENS_EXPIRED_DAYS);
            var cookieModel = new Models.QB.AuthCookie(
                authModel.RealmId,
                expiredDate.ToAtqbCookieString(),
                authModel.AccessToken,
                authModel.AccessTokenSecret
            );
            HttpContext.Response.Cookies.AppendObject(CookiesKeys.QbAuth.ToString(), cookieModel, expiredDate);
            // </- Add Cookie -->
        }
        private QbAuthModel RestoreAuthInfo()
        {
            // <-- Check for AuthToken in DB -->
            var atUrl = _actiTimeProvider.GetActiTime().Url.ToAtqbDbString();
            var authToken = _db.AuthTokenRepository.GetAll()
                .SingleOrDefault(t => t.AtUrl == atUrl)
            ;
            if (authToken == null)
            {
                return null;
            }
            // </- Check for AuthToken in DB -->

            // <-- Check for Qb Access Tokens in Cookies -->
            var qbAccessToken = HttpContext.Request.Cookies.GetObject<Models.QB.AuthCookie>(CookiesKeys.QbAuth.ToString());
            if (qbAccessToken == null || qbAccessToken.CompanyId != authToken.QbCompanyId)
            {
                return null;
            }
            // </- Check for Qb Access Tokens in Cookies -->

            if (qbAccessToken.IsExpired())
            {
                var oAuthService = new OAuthService(_oAuthSettings);
                return oAuthService.RenewToken(
                    qbAccessToken.AccessToken,
                    qbAccessToken.AccessTokenSecret,
                    qbAccessToken.CompanyId
                );
            }

            return new QbAuthModel(
                _oAuthSettings.AppToken,
                _oAuthSettings.ConsumerKey,
                _oAuthSettings.ConsumerSecret,
                qbAccessToken.AccessToken,
                qbAccessToken.AccessTokenSecret,
                qbAccessToken.CompanyId
            );
        }

        private void InitializeQbConnector(QbAuthModel authModel)
        {
            _quickBooks.Initialize(authModel, _qbConnectorSettings.PathToLogLocation);
        }
    }
}
