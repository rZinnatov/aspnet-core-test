using System;

namespace ATQB.WebApp.Util.Extensions
{
    public static class UriExtensions
    {
        public static string ToAtqbString(this Uri uri)
        {
            // TODO: Place to config
            const string RPC_PATH = "/rpc";

            var path = "";
            if (uri.AbsolutePath.Length > RPC_PATH.Length)
            {
                path = $"/{uri.AbsolutePath.Substring(0, uri.AbsolutePath.Length - RPC_PATH.Length)}";
            }

            return $"{uri.Scheme}://{uri.Authority}{path}";
        }
        public static string ToAtqbDbString(this Uri uri)
        {
            // TODO: Place to config
            const string RPC_PATH = "/rpc";

            var path = "";
            if (uri.AbsolutePath.Length > RPC_PATH.Length)
            {
                path = $"/{uri.AbsolutePath.Substring(0, uri.AbsolutePath.Length - RPC_PATH.Length)}";
            }

            return $"{uri.Authority}{path}";
        }
    }
}
