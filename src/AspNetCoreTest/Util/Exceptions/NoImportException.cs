using System;

namespace ATQB.WebApp.Util.Exceptions
{
    public class NoImportException : Exception
    {
        public NoImportException(int userId)
            : base($"There is no import to start for userId = {userId}")
        {
        }
    }
}
