using ATQB.WebApp.Models.QB;
using System;

namespace ATQB.WebApp.Util.Extensions
{
    public static class AuthCookieModelExtensions
    {
        public static bool IsExpired(this AuthCookie authCookieModel)
        {
            DateTime expiredDate;
            if (!DateTime.TryParse(authCookieModel.ExpiredDate, out expiredDate))
            {
                throw new Exception($"Cannot parse 'expiredDate' in cookies model. Expired date value = '{authCookieModel.ExpiredDate}'");
            }

            if (expiredDate < DateTime.Now)
            {
                return true;
            }

            return false;
        }
    }
}
