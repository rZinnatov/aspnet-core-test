using System;

namespace ATQB.WebApp.Util.Exceptions
{
    public class ConfigurationException : Exception
    {
        public ConfigurationException(string message)
                : base(message)
        {
        }
        public ConfigurationException(Exception innerException)
                : base("Error in configuration. See inner exception", innerException)
        {
        }
    }
}
