using ATQB.WebApp.Util.Enums;

namespace ATQB.WebApp.Models.Import.Mapping
{
    public class MapItem<T>
    {
        public T AtEntity { get; set; }
        public QbEntityInfo QbEntity { get; set; }
        public ProcessingRules ProcessingRule { get; set; }
    }
}
