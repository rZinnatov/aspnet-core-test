using ATQB.WebApp.Util.Enums;

namespace ATQB.WebApp.Models
{
    public class MappingRules
    {
        public QbCustomersImportFrom QbCustomersImportFrom { get; set; }
        public bool IsQbSubCustomersImported { get; set; }
        public bool IsTaskNamesImported { get; set; }
        public bool IsCommentsImported { get; set; }
    }
}
