namespace ATQB.WebApp.Models.Import.Mapping
{
    public class QbEntityInfo
    {
        public string Id { get; set; }
        public string ParentId { get; set; }
        public bool IsChild
        {
            get
            {
                return ParentId != null;
            }
        }

        public QbEntityInfo()
        {
            Id = "";
            ParentId = null;
        }
    }
}
