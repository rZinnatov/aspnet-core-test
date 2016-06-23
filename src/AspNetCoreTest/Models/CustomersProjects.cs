using ATQB.WebApp.Models.AT;
using System.Collections.Generic;

namespace ATQB.WebApp.Models
{
    public class CustomersProjects
    {
        public IEnumerable<Project> Projects { get; set; }
        public IEnumerable<Customer> Customers { get; set; }
    }
}
