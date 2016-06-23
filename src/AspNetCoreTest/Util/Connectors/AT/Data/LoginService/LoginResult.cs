using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT.Data.LoginService
{
    public class Login
    {
        public int UserId { get; set; }
        public string ServerId { get; set; }
        public string ResultCode { get; set; }
        public IEnumerable<string> AvailableServices { get; set; }

        public Login()
        {
            AvailableServices = new string[0];
        }
    }
}
