using System;

namespace ATQB.WebApp.Models.AT
{
    public class Record
    {
        public int UserId { get; set; }
        public int AtEntityId { get; set; }
        public int TypeOfWorkId { get; set; }
        public int Minutes { get; set; }
        public int CorrectionMinutes { get; set; }
        public int Revision { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}
