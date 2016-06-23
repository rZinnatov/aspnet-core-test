using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class CustomersProjectsResult
    {
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<Customer> Customers { get; set; }
    }
}
