using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    // TODO: DISCUSS: Unique Indexes: { ImportId, WorkTypeId }, { ImportId, ServiceItemId }

    [Table("typeofworkmap")]
    public class TypeOfWorkMap
    {
        [Key]
        public int Id { get; set; }

        public int WorkTypeId { get; set; }

        public string ServiceItemId { get; set; }

        public int ProcessingRule { get; set; }
    }
}
