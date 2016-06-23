using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class LeaveType : IEquatable<LeaveType>
    {
        public int Id { get; set; }
        public int IconId { get; set; }
        public int Position { get; set; }
        public int RateCoefficient { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Planned { get; set; }
        public bool Archived { get; set; }

        public object CreationTimestamp { get; set; }


        public bool Equals(LeaveType other)
        {
            return other.Id == Id;
        }
    }
}
