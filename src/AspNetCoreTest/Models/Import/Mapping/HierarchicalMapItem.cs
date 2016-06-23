using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import.Mapping
{
    public class HierarchicalMapItem<ParentType, ChildType> : MapItem<ParentType>
    {
        public IEnumerable<MapItem<ChildType>> Items { get; set; }
    }
}
