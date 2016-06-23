using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class TimeTrackRecord : IEquatable<TimeTrackRecord>
    {
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public int Spent { get; set; }
        public int Revision { get; set; }

        public string Comment { get; set; }

        public string Date { get; set; }


        public bool Equals(TimeTrackRecord other)
        {
            return other.Revision == Revision;
        }
    }
}
