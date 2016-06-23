using System;

namespace ATQB.WebApp.Util.Exceptions
{
    public class AtConnectorException : Exception
    {
        public int AtErrorCode { get; set; }

        public AtConnectorException(string message)
            : this(message, 0)
        {
        }
        public AtConnectorException(string message, int atErrorCode)
            : base(message)
        {
            AtErrorCode = atErrorCode;
        }
    }
}
