using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace ATQB.WebApp.Util.Extensions
{
    public static class CookiesExtensions
    {
        public static void AppendObject(this IResponseCookies cookies, string key, object jsonModel, DateTime expiredDate)
        {
            var cookieValue = JsonConvert.SerializeObject(jsonModel);

            var encryptedCookieValue = Encrypt(cookieValue);

            cookies.Append(key, encryptedCookieValue, new CookieOptions { Expires = expiredDate });
        }
        public static T GetObject<T>(this IRequestCookieCollection cookies, string key) where T : class
        {
            if (!cookies.ContainsKey(key))
            {
                return null;
            }

            var cookie = cookies.SingleOrDefault(c => c.Key == key);
            
            var decryptedCookieValue = Decrypt(cookie.Value);

            return JsonConvert.DeserializeObject<T>(decryptedCookieValue);
        }
        /// <summary>
        /// IResponseCookies.Delete method doesn't work. Use this extensions method.
        /// </summary>
        /// <param name="cookies"></param>
        /// <param name="key"></param>
        public static void Remove(this IResponseCookies cookies, string key)
        {
            cookies.Delete(key, new CookieOptions { Path = "/" });
        }


        // <-- TODO: Apply proper encryption -->
        private static string Encrypt(string input)
        {
            return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(input));
        }
        private static string Decrypt(string input)
        {
            return System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(input));
        }
        // </- Apply proper encryption -->
    }
}
