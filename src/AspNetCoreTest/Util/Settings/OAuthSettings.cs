namespace ATQB.WebApp.Util.Settings
{
    public class OAuthSettings
    {
        public string AppToken { get; set; }
        public string ConsumerKey { get; set; }
        public string ConsumerSecret { get; set; }
        public string AuthorizeUrl { get; set; }
        public string AccessTokenUrl { get; set; }
        public string RequestTokenUrl { get; set; }
        public string OAuthCallbackUrl { get; set; }
        public string RenewTokenUrl { get; set; }
        public string CertificateSubjectName { get; set; }
    }
}
