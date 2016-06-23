namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class Project
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public bool Archived { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long CreationTimestamp { get; set; }
    }
}
