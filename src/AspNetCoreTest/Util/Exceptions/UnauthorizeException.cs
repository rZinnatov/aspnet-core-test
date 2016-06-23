namespace ATQB.WebApp.Util.Exceptions
{
    public class UnauthorizeException : AtConnectorException
    {
        public UnauthorizeException()
            : base("You have to login actiTIME first")
        {
        }
    }
}
