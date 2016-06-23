using ATQB.WebApp.Util.Connectors.AT.Data;
using ATQB.WebApp.Util.Exceptions;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace ATQB.WebApp.Util.Services
{
    public class HttpService : IHttpService
    {
        private HttpClient _httpClient;
        private ILogger<IHttpService> _logger;

        public Uri Url { get; private set; }

        public HttpService(Uri url, ILogger<IHttpService> logger)
        {
            Url = url;
            _logger = logger;

            _httpClient = new HttpClient(new HttpClientHandler()
            {
                AllowAutoRedirect = false
            });
        }


        public async Task<AtResult<T>> Post<T>(Request data)
        {
            var content = new StringContent(
                JsonConvert.SerializeObject(data),
                System.Text.Encoding.UTF8,
                "application/json"
            );

            var response = await _httpClient.PostAsync(Url, content);
            if (response.StatusCode == System.Net.HttpStatusCode.Moved)
            {
                Url = response.Headers.Location;
                return await Post<T>(data);
            }

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var responseString = await response.Content.ReadAsStringAsync();

                // Try parse response as AtResult<T>
                var responseObject = JsonConvert.DeserializeObject<AtResult<T>>(responseString);
                if (responseObject.Result != null ||
                    // <-- TODO: WARN: Kostyl detected: actiTIME answers with { Result: null } on Logout -->
                    data.Method == Connectors.AT.Enums.ActiTimeRpcMethods.Logout)
                    // </- Kostyl detected -->
                {
                    return responseObject;
                }

                // Try parse response as Error
                var responseError = JsonConvert.DeserializeObject<ErrorResponse>(responseString);
                if (responseError.Error != null)
                {
                    _logger.LogWarning($"actiTIME Error: {responseString}");

                    throw new AtConnectorException("actiTIME error", responseError.Error.Code);
                }

                throw new AtConnectorException("Cannot parse response. Unknown format.");
            }

            throw new AtqbHttpException(response.StatusCode);
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_httpClient != null)
                {
                    _httpClient.Dispose();
                    _httpClient = null;
                }
            }
        }
    }
}
