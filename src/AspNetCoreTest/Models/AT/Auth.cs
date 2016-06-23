using System.ComponentModel.DataAnnotations;

namespace ATQB.WebApp.Models.AT
{
    public class Auth
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Enter user name")]
        public string UserName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Enter password")]
        public string Password { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Enter actiTIME url")]
        public string ActiTimeUrl { get; set; }

        public Auth()
        {
            UserName = "";
            Password = "";
            ActiTimeUrl = "";
        }
        public Auth(
            string userName,
            string password,
            string actiTimeUrl
        ) {
            UserName = userName;
            Password = password;
            ActiTimeUrl = actiTimeUrl;
        }
    }
}
