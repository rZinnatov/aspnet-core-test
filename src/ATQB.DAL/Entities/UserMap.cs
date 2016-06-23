using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    // TODO: DISCUSS: Unique Indexes: { ImportId, UserId }, { ImportId, EmployeeId }

    [Table("usermap")]
    public class UserMap
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public string EmployeeId { get; set; }

        public int ProcessingRule { get; set; }
    }
}
