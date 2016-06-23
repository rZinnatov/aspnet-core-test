using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class UserInfo : IEquatable<UserInfo>
    {
        public int Id { get; set; }
        public int UserGroupId { get; set; }
        public int TimeZoneGroupId { get; set; }

        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }

        public bool Enabled { get; set; }


        public bool Equals(UserInfo other)
        {
            return other.Id == Id;
        }
    }
}
