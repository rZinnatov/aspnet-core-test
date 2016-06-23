using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class LeaveRecord : IEquatable<LeaveRecord>
    {
        public int UserId { get; set; }
        public int TypeId { get; set; }
        public int Time { get; set; }
        public int Revision { get; set; }

        public string Date { get; set; }


        public bool Equals(LeaveRecord other)
        {
            return other.Revision == Revision;
        }
    }
}
