using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("leavetypemap")]
    public class LeaveTypeMap
    {
        [Key]
        public int Id { get; set; }

        public int LeaveTypeId { get; set; }

        public string ServiceItemId { get; set; }

        public int ProcessingRule { get; set; }
    }
}
