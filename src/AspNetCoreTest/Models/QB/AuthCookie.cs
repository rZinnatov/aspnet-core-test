namespace ATQB.WebApp.Models.QB
{
    public class AuthCookie
    {
        public string CompanyId { get; set; }
        public string ExpiredDate { get; set; }
        public string AccessToken { get; set; }
        public string AccessTokenSecret { get; set; }

        public AuthCookie(
            string companyId,
            string expiredDate,
            string accessToken,
            string accessTokenSecret
        ) {
            CompanyId = companyId;
            ExpiredDate = expiredDate;
            AccessToken = accessToken;
            AccessTokenSecret = accessTokenSecret;
        }
    }
}
