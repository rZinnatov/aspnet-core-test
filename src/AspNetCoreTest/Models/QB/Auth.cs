namespace ATQB.WebApp.Models.QB
{
    public class Auth
    {
        public string AppToken { get; private set; }
        public string ConsumerKey { get; private set; }
        public string ConsumerSecret { get; private set; }
        public string AccessToken { get; private set; }
        public string AccessTokenSecret { get; private set; }
        /// <summary>
        /// Company Id
        /// </summary>
        public string RealmId { get; private set; }

        public Auth(
            string appToken,
            string consumerKey,
            string consumerSecret,
            string accessToken,
            string accessTokenSecret,
            string realmId
        ) {
            AppToken = appToken;
            ConsumerKey = consumerKey;
            ConsumerSecret = consumerSecret;
            AccessToken = accessToken;
            AccessTokenSecret = accessTokenSecret;
            RealmId = realmId;
        }
    }
}
