using System;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class UserGroup : IEquatable<UserGroup>
    {
        public int Id { get; set; }
        public string Name { get; set; }


        public bool Equals(UserGroup other)
        {
            return other.Id == Id;
        }
    }
}
