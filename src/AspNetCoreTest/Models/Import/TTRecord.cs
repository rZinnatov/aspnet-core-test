using System;

namespace ATQB.WebApp.Models.Import
{
    public class TTRecord
    {
        public int UserId { get; set; }
        public int TaskId { get; set; }
        public int CustomerId { get; set; }
        public int ProjectId { get; set; }
        public int TypeOfWorkId { get; set; }
        public int Minutes { get; set; }
        public int Revision { get; set; }
        public DateTime Date { get; set; }
        public string TaskName { get; set; }
        public string Comment { get; set; }
    }
}
