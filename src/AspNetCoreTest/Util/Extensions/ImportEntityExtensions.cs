using ATQB.DAL.Entities;
using ATQB.WebApp.Util.Enums;

namespace ATQB.WebApp.Util.Extensions
{
    public static class ImportEntityExtensions
    {
        public static bool IsActive(this Import import)
        {
            return import.Status == (int)ImportStatuses.Active;
        }
    }
}
