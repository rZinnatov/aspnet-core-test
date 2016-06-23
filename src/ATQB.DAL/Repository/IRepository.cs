using System.Collections.Generic;
using System.Linq;

namespace ATQB.DAL.Repository
{
    /// <summary>
    /// Provide access to databse table
    /// </summary>
    /// <remarks>
    /// Should not dispose context. Connection controls context lifetime.
    /// You should call Connection.Save to save changes to DB
    /// </remarks>
    /// <typeparam name="T"></typeparam>
    public interface IRepository<T>
        where T : class
    {
        IQueryable<T> GetAll();

        T Add(T obj);

        void AddRange(IEnumerable<T> objs);

        void Update(T obj);

        void Delete(T obj);

        void DeleteRange(IEnumerable<T> objs);
    }
}