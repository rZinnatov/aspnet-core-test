using System.Collections.Generic;

namespace ATQB.WebApp.Models.Import.Mapping
{
    // TODO: Need review. Seems to be complicated.
    public abstract class AbstractMap<MapItemType>
    {
        public int ImportId { get; set; }
        public IEnumerable<MapItemType> Items { get; set; }
    }

    public class Map<ItemType> : AbstractMap<MapItem<ItemType>>
    {
    }

    public class Map<ParentItemType, ChildItemType> : AbstractMap<HierarchicalMapItem<ParentItemType, ChildItemType>>
    {
    }
}
