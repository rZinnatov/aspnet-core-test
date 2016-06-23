using System;
using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import.Prepare
{
    public class PrepareImport
    {
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public IEnumerable<int> UserIds { get; set; }

        public Customer[] Customers { get; set; }

        public ApprovedTimeStatuses ApprovedTime { get; set; }
    }
}
