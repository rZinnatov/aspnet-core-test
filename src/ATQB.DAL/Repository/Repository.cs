using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ATQB.DAL.Repository
{
    public class Repository<T> : IRepository<T>
        where T : class
    {
        public Repository(DbSet<T> entries)
        {
            Context = entries;
        }

        protected DbSet<T> Context { get; set; }

        public IQueryable<T> GetAll()
        {
            return Context;
        }

        public T Add(T obj)
        {
            return Context.Add(obj).Entity;
        }

        public void AddRange(IEnumerable<T> objs)
        {
            Context.AddRange(objs);
        }

        public void Update(T obj)
        {
            Context.Attach(obj);
            Context.Update(obj);
        }

        public void Delete(T obj)
        {
            Context.Remove(obj);
        }

        public void DeleteRange(IEnumerable<T> objs)
        {
            foreach (var obj in objs)
            {
                Delete(obj);
            }
        }
    }
}