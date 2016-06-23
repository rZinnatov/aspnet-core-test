using ATQB.WebApp.Util.Helpers;
using ATQB.WebApp.Util.Settings;
using DevDefined.OAuth.Consumer;
using DevDefined.OAuth.Framework;
using System;
using ATQB.WebApp.Models.QB;

namespace ATQB.WebApp.Util.Services
{
    public class OAuthService
    {
        private IToken _accessToken;
        private OAuthSession _oAuthSession;
        public OAuthSettings Settings { get; private set; }
        
        public OAuthService(OAuthSettings oAuthSettings)
        {
            _accessToken = null;
            Settings = oAuthSettings;

            var oAuthConsumerContext = new OAuthConsumerContext
            {
                ConsumerKey = Settings.ConsumerKey,
                ConsumerSecret = Settings.ConsumerSecret,
                SignatureMethod = SignatureMethod.HmacSha1
            };

            _oAuthSession = new OAuthSession(
                oAuthConsumerContext,
                Settings.RequestTokenUrl,
                Settings.AuthorizeUrl,
                Settings.AccessTokenUrl
            );
        }


        public IToken GetRequestToken()
        {
            return _oAuthSession.GetRequestToken();
        }
        public string GetAuthorizationLink(IToken requestToken)
        {
            return _oAuthSession.GetUserAuthorizationUrlForToken(requestToken, Settings.OAuthCallbackUrl);
        }
        public IToken GetAccessToken(IToken requestToken, string oauthVerifier)
        {
            _accessToken = _oAuthSession.ExchangeRequestTokenForAccessToken(requestToken, oauthVerifier);
            return _accessToken;
        }
        public bool IsAuthorized()
        {
            string responseText = _oAuthSession
                .Request()
                .Get()
                // TODO: Use enum value for url
                .ForUrl("https://appcenter.intuit.com/api/v1/PingSecure")
                .ToString()
            ;

            var xml = new XmlHelper(responseText);
            return xml.GetValueByNodeName("ErrorCode") == "0";
        }
        public Auth RenewToken(string accessToken, string accessTokenSecret, string realmId)
        {
            _oAuthSession.AccessToken = new TokenBase
            {
                Token = accessToken,
                TokenSecret = accessTokenSecret,
                ConsumerKey = Settings.ConsumerKey
            };

            string responseText = _oAuthSession
                .Request()
                .Get()
                .ForUrl(Settings.RenewTokenUrl)
                .ToString()
            ;
            var xml = new XmlHelper(responseText);

            // TODO: Parse xml to object
            var isError = xml.GetValueByNodeName("ErrorCode") != "0";
            if (isError)
            {
                throw new Exception(xml.GetValueByNodeName("ErrorMessage"));
            }

            return new Auth(
                Settings.AppToken,
                Settings.ConsumerKey,
                Settings.ConsumerSecret,
                xml.GetValueByNodeName("OAuthToken"),
                xml.GetValueByNodeName("OAuthTokenSecret"),
                realmId
            );
        }
    }
}
