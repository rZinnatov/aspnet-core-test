using System;
using System.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ATQB.DAL.Entities;
using ATQB.DAL.Repository;
using ATQB.DAL.Context;
using Microsoft.EntityFrameworkCore.Storage;

namespace ATQB.DAL.Connection
{
    public class Connection : IConnection
    {
        private AtqbContext _context;

        public Connection(AtqbContext context)
        {
            _context = context;
        }

        
        public IRepository<Import> ImportRepository
        {
            get { return new Repository<Import>(_context.Imports); }
        }
        public IRepository<Mapping> MappingRepository
        {
            get { return new Repository<Mapping>(_context.Mappings); }
        }
        public IRepository<AuthToken> AuthTokenRepository
        {
            get { return new Repository<AuthToken>(_context.AuthTokens); }
        }

        public IRepository<UserMap> UserMapRepository
        {
            get { return new Repository<UserMap>(_context.UserMaps); }
        }
        public IRepository<TaskMap> TaskMapRepository
        {
            get { return new Repository<TaskMap>(_context.TaskMaps); }
        }
        public IRepository<QbCustomerMap> QbCustomerMapRepository
        {
            get { return new Repository<QbCustomerMap>(_context.QbCustomerMaps); }
        }
        public IRepository<TypeOfWorkMap> WorkTypeMapRepository
        {
            get { return new Repository<TypeOfWorkMap>(_context.WorkTypeMaps); }
        }
        public IRepository<LeaveTypeMap> LeaveTypeMapRepository
        {
            get { return new Repository<LeaveTypeMap>(_context.LeaveTypeMaps); }
        }

        public IRepository<TTMap> TTMapRepository
        {
            get { return new Repository<TTMap>(_context.TTMaps); }
        }


        public IDbContextTransaction BeginTransaction(IsolationLevel level)
        {
            return _context.Database.BeginTransaction(level);
        }
        public async Task Save()
        {
            await _context.SaveChangesAsync();
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
                if (_context != null)
                {
                    _context.Dispose();
                    _context = null;
                }
            }
        }
    }
}
