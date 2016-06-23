using ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1;

namespace ATQB.WebApp.Models
{
    public class AuthInfo
    {
        public UserInfo AtUser { get; set; }
        public bool IsQbConnected { get; set; }
    }
}
