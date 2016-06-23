using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class Project : IEquatable<Project>
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public bool Archived { get; set; }
        public long? CreationTimeStamp { get; set; }


        public bool Equals(Project other)
        {
            return other.Id == Id;
        }
    }
}
