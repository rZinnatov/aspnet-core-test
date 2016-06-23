namespace ATQB.WebApp.Util.Exceptions
{
    public class LoginFailedException : AtConnectorException
    {
        public LoginFailedException()
            : base("Login to actiTIME has failed")
        {
        }
    }
}