namespace ATQB.WebApp.Util.Exceptions
{
    public class NotInitializedException : AtConnectorException
    {
        public NotInitializedException()
            : base("actiTIME connector was not initialized")
        {
        }
    }
}