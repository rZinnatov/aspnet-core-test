using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import.Prepare
{
    public class NewRecords
    {
        public IEnumerable<int> UserIds { get; set; }
        public IEnumerable<int> CustomerIds { get; set; }
        public IEnumerable<int> ProjectIds { get; set; }
        public IEnumerable<LeaveType> LeaveTypes { get; set; }
        public IEnumerable<TypeOfWork> TypeOfWorks { get; set; }
    }
}
