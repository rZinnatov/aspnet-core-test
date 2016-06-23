using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import.Prepare
{
    public class Customer
    {
        public int Id { get; set; }
        public IEnumerable<int> ProjectIds { get; set; }
    }
}
