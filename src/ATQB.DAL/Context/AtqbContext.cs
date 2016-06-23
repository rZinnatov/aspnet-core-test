using ATQB.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace ATQB.DAL.Context
{
    public class AtqbContext : DbContext
    {
        public DbSet<Import> Imports { get; set; }
        public DbSet<Mapping> Mappings { get; set; }
        public DbSet<AuthToken> AuthTokens { get; set; }

        public DbSet<UserMap> UserMaps { get; set; }
        public DbSet<TaskMap> TaskMaps { get; set; }
        public DbSet<QbCustomerMap> QbCustomerMaps { get; set; }
        public DbSet<TypeOfWorkMap> WorkTypeMaps { get; set; }
        public DbSet<LeaveTypeMap> LeaveTypeMaps { get; set; }

        public DbSet<TTMap> TTMaps { get; set; }

        public AtqbContext(DbContextOptions<AtqbContext> options)
            : base(options)
        {
        }
    }
}
