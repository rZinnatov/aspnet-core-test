using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("ttmap")]
    public class TTMap
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public int AtEntityId { get; set; }

        public int Minutes { get; set; }

        public int Revision { get; set; }

        public DateTime Date { get; set; }
    }
}
