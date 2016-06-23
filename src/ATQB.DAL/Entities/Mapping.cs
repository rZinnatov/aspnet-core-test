using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("mapping")]
    public class Mapping
    {
        [Key]
        public int Id { get; set; }
        public bool IsQbCustomersMapToAtCustomers { get; set; }
        public bool IsQbSubCustomersImported { get; set; }
        public bool IsTaskNamesImported { get; set; }
        public bool IsCommentsImported { get; set; }
    }
}
