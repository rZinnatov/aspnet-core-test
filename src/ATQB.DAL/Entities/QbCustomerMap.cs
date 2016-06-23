using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("qbcustomermap")]
    public class QbCustomerMap
    {
        [Key]
        public int Id { get; set; }

        public int AtId { get; set; }

        public string QbId { get; set; }

        public int ProcessingRule { get; set; }
    }
}
