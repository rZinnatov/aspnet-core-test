using System;
using System.Threading.Tasks;
using ATQB.WebApp.Util.Connectors.AT.Data;

namespace ATQB.WebApp.Util.Services
{
    public interface IHttpService : IDisposable
    {
        Uri Url { get; }
        Task<AtResult<T>> Post<T>(Request data);
    }
}