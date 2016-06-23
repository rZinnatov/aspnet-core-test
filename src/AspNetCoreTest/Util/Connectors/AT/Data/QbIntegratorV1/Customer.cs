using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class Customer : IEquatable<Customer>
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Archived { get; set; }
        public object CreationTimestamp { get; set; }


        public bool Equals(Customer other)
        {
            return other.Id == Id;
        }
    }
}
