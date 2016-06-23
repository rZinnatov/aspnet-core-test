using System.Collections.Generic;

namespace ATQB.WebApp.Util.Connectors.AT.Data.QbIntegratorV1
{
    public class UserSelectorData
    {
        public IEnumerable<UserInfo> Users { get; set; }
        public IEnumerable<UserGroup> UserGroups { get; set; }
        public IEnumerable<UserGroup> TimeZoneGroups { get; set; }
    }
}
