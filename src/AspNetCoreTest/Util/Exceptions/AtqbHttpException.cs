using System.Net.Http;

namespace ATQB.WebApp.Util.Exceptions
{
    public class AtqbHttpException : HttpRequestException
    {
        public System.Net.HttpStatusCode StatusCode { get; private set; }

        public AtqbHttpException(System.Net.HttpStatusCode statusCode)
            : base($"Status code: {statusCode}")
        {
            StatusCode = statusCode;
        }
    }
}
