using System.ComponentModel.DataAnnotations;

namespace ATQB.WebApp.Models
{
    public class OAuthCallback
    {
        [Required(AllowEmptyStrings = false)]
        public string RealmId { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string OAuth_Token { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string OAuth_Verifier { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string DataSource { get; set; }
    }
}
