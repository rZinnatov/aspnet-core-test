using ATQB.WebApp.Util.Connectors.AT;
using ATQB.WebApp.Util.Helpers;
using ATQB.WebApp.Util.Services;
using Microsoft.Extensions.Logging;

namespace ATQB.WebApp.Util.Factories
{
    public class AtConnectorFactory
    {
        private ILogger<IHttpService> _httpServiceLogger;

        public AtConnectorFactory(ILogger<IHttpService> httpServiceLogger)
        {
            _httpServiceLogger = httpServiceLogger;
        }


        public IAtConnector Build(string actiTimeUrl)
        {
            var httpService = new HttpService(
                UriHelper.CreateActiTimeRpcUri(actiTimeUrl),
                _httpServiceLogger
            );

            return new AtConnector(httpService);
        }
    }
}
