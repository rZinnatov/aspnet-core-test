using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("import")]
    public class Import
    {
        [Key]
        public int Id { get; set; }

        public int AtUserId { get; set; }

        public int AuthTokenId { get; set; }

        // 0: Active, 1: Success, 2: CompletedWithAlerts, 3: Interrupted
        public int Status { get; set; }
    }
}
