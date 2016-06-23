using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class UserTimeTrack
    {
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<BillingType> BillingTypes { get; set; }
        public IEnumerable<LeaveType> LeaveTypes { get; set; }
        public IEnumerable<TTRecord> TTRecords { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
        public IEnumerable<Customer> Customers { get; set; }
        public IEnumerable<LeaveRecord> LeaveRecords { get; set; }
    }
}
