namespace ATQB.WebApp.Util.Connectors.AT.Data.QbServiceV1
{
    public class Task
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int BillingTypeId { get; set; }
        public bool Completed { get; set; }
        public string EstimatedTime { get; set; }
        public string DeadlineDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public object CreationTimestamp { get; set; }
    }
}
