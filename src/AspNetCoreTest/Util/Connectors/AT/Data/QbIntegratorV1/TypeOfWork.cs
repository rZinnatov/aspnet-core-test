using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class TypeOfWork : IEquatable<TypeOfWork>
    {
        public int Id { get; set; }
        public int? Rate { get; set; }
        public int Position { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Default { get; set; }
        public bool Archived { get; set; }
        public bool Billable { get; set; }

        public long? CreationTimestamp { get; set; }


        public bool Equals(TypeOfWork other)
        {
            return other.Id == Id;
        }
    }
}
