using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class TimeTrack
    {
        public IEnumerable<Task> Tasks { get; set; }
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<Customer> Customers { get; set; }
        public IEnumerable<UserInfo> UserInfo { get; set; }
        public IEnumerable<LeaveType> LeaveTypes { get; set; }
        public IEnumerable<TypeOfWork> TypesOfWork { get; set; }
        public IEnumerable<LeaveRecord> LeaveRecords { get; set; }
        public IEnumerable<TimeTrackRecord> TTRecords { get; set; }
    }
}
