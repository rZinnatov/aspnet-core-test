using System;

namespace ATQB.WebApp.Models.QB
{
    public class Record
    {
        public string EmployeeId { get; set; }
        public string CustomerId { get; set; }
        public string ServiceItemId { get; set; }
        public int Minutes { get; set; }
        public int CorrectionMinutes { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}
