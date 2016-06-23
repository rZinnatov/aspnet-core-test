namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class BillingType
    {
        public int Id { get; set; }
        public int Rate { get; set; }
        public int Position { get; set; }
        public bool Default { get; set; }
        public bool Archived { get; set; }
        public bool Billable { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public object CreationTimestamp { get; set; }
    }
}
