namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class LeaveType
    {
        public int Id { get; set; }
        public int IconId { get; set; }
        public int Position { get; set; }
        public int RateCoefficient { get; set; }
        public bool Planned { get; set; }
        public bool Archived { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public object CreationTimestamp { get; set; }
    }
}
