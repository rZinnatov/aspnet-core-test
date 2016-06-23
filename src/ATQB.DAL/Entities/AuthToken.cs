using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATQB.DAL.Entities
{
    [Table("authtoken")]
    public class AuthToken
    {
        [Key]
        public int Id { get; set; }

        public string AtUrl { get; set; }

        public string QbCompanyId { get; set; }

        public AuthToken()
            : this("", "")
        {
        }
        public AuthToken(string atUrl, string qbCompanyId)
        {
            AtUrl = atUrl;
            QbCompanyId = qbCompanyId;
        }
    }
}
