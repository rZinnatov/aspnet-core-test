using ATQB.WebApp.Util.Connectors.AT;
using System;

namespace ATQB.WebApp.Util.Services
{
    public class AtConnectorProviderService
    {
        private IAtConnector _actiTime;

        public IAtConnector GetActiTime()
        {
            if (_actiTime == null)
            {
                throw new InvalidOperationException("AT Connector was not set");
            }

            return _actiTime;
        }
        public void SetActiTime(IAtConnector actiTime)
        {
            if (actiTime == null)
            {
                throw new ArgumentNullException(nameof(actiTime));
            }

            _actiTime = actiTime;
        }
    }
}
