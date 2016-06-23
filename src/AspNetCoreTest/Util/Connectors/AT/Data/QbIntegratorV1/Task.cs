using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class Task : IEquatable<Task>
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int BillingTypeId { get; set; }
        public int EstimatedTime { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Completed { get; set; }

        public string DeadlineDate { get; set; }
        public object CreationTimestamp { get; set; }


        public bool Equals(Task other)
        {
            return other.Id == Id;
        }
    }
}
