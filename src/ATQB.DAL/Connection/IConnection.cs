using ATQB.DAL.Entities;
using ATQB.DAL.Repository;
using System;
using System.Threading.Tasks;

namespace ATQB.DAL.Connection
{
    public interface IConnection : IDisposable
    {
        IRepository<Import> ImportRepository { get; }
        IRepository<Mapping> MappingRepository { get; }
        IRepository<AuthToken> AuthTokenRepository { get; }

        IRepository<UserMap> UserMapRepository { get; }
        IRepository<TaskMap> TaskMapRepository { get; }
        IRepository<QbCustomerMap> QbCustomerMapRepository { get; }
        IRepository<TypeOfWorkMap> WorkTypeMapRepository { get; }
        IRepository<LeaveTypeMap> LeaveTypeMapRepository { get; }

        IRepository<TTMap> TTMapRepository { get; }
        
        Task Save();
    }
}