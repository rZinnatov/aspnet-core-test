namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class Customer
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Archived { get; set; }
        public object CreationTimestamp { get; set; }
    }
}
