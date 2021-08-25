using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.Entities
{
    public class Setting
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int SettingID { get; set; }

        [Display(Name = "نام کاربری ادمین")]
        [Required]
        [MaxLength(150, ErrorMessage = "مقدار {0} نباید بیشتر از {1} کاراکتر باشد")]
        public string UserNameAdmin { get; set; }

        [Display(Name = "رمز عبور ادمین")]
        [Required]
        [MaxLength(150, ErrorMessage = "مقدار {0} نباید بیشتر از {1} کاراکتر باشد")]
        public string PasswordAdmin { get; set; }

        [Display(Name = "ایمیل")]
        [Required]
        [MaxLength(250, ErrorMessage = "مقدار {0} نباید بیشتر از {1} کاراکتر باشد")]
        [EmailAddress(ErrorMessage = "لطفا ایمیل معتبر وارد نمایید")]
        public string Email { get; set; }

        [Display(Name = "رمز عبور ایمیل")]
        [Required]
        [MaxLength(150, ErrorMessage = "مقدار {0} نباید بیشتر از {1} کاراکتر باشد")]
        [DataType(DataType.Password)]
        public string EmailPassword { get; set; }
    }
}
