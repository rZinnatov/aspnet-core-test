using ATQB.WebApp.Util.Enums;
using DevDefined.OAuth.Framework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Newtonsoft.Json;

using AtUserInfo = ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1.UserInfo;

namespace ATQB.WebApp.Util.Extensions
{
    // TODO: Refact candidate
    public static class SessionExtensions
    {
        public static void SetObject(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }
        public static T GetObject<T>(this ISession session, string key) where T: class
        {
            var value = session.GetString(key);

            return value == null ? null : JsonConvert.DeserializeObject<T>(value);
        }
        public static bool IsObjectSet<T> (this ISession session, string key) where T : class
        {
            var obj = session.GetObject<T>(key);

            return obj != null;
        }


        public static bool IsAtAuthenticated(this ISession session)
        {
            return session.GetCurrentUser() != null;
        }
        public static bool IsQbAuthenticated(this ISession session)
        {
            return session.GetQbAuthModel() != null;
        }

        public static void ClearAuthInfo(this ISession session)
        {
            session.Remove(SessionKeys.AtCurrentUser.ToString());
            session.ClearQbAuthInfo();
        }
        public static void ClearQbAuthInfo(this ISession session)
        {
            session.Remove(SessionKeys.RequestToken.ToString());
            session.Remove(SessionKeys.QbAuth.ToString());
        }


        public static IToken GetRequestToken(this ISession session)
        {
            return session.GetObject<TokenBase>(SessionKeys.RequestToken.ToString());
        }
        public static void SetRequestToken(this ISession session, IToken requestToken)
        {
            session.SetObject(SessionKeys.RequestToken.ToString(), requestToken);
        }

        public static Models.QB.Auth GetQbAuthModel(this ISession session)
        {
            return session.GetObject<Models.QB.Auth>(SessionKeys.QbAuth.ToString());
        }
        public static void SetQbAuthModel(this ISession session, Models.QB.Auth qbAuthModel)
        {
            session.SetObject(SessionKeys.QbAuth.ToString(), qbAuthModel);
        }

        public static AtUserInfo GetCurrentUser(this ISession session)
        {
            return session.GetObject<AtUserInfo>(SessionKeys.AtCurrentUser.ToString());
        }
        public static void SetCurrentUser(this ISession session, AtUserInfo currentUser)
        {
            session.SetObject(SessionKeys.AtCurrentUser.ToString(), currentUser);
        }
    }
}
