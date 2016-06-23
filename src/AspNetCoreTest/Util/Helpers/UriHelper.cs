using ATQB.WebApp.Util.Exceptions;
using System;

namespace ATQB.WebApp.Util.Helpers
{
    public class UriHelper
    {
        public static bool TryCreate(string uri, out Uri uriResult)
        {
            if (!Uri.TryCreate(uri, UriKind.Absolute, out uriResult))
            {
                return false;
            }

            if (uriResult.Scheme != "http" && uriResult.Scheme != "https")
            {
                return false;
            }

            return true;
        }
        public static Uri CreateActiTimeRpcUri(string actiTimeUrl)
        {
            if (actiTimeUrl == null)
            {
                throw new ArgumentNullException(nameof(actiTimeUrl));
            }

            // TODO: Place to config
            const string RPC_PATH = "/rpc";

            var actiTimeRpcUrl = $"{actiTimeUrl.TrimEnd('/')}{RPC_PATH}";

            Uri uri;
            if (!TryCreate(actiTimeRpcUrl, out uri))
            {
                throw new BadUrlException();
            }
            return uri;
        }
    }
}
