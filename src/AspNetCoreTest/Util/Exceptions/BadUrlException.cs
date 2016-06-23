using System;

namespace ATQB.WebApp.Util.Exceptions
{
    public class BadUrlException : Exception
    {
        public BadUrlException()
            : base("Bad url format. Please, enter valid url")
        {
        }
    }
}