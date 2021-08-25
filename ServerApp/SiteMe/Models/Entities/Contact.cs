using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.Entities
{
    public class Contact
    {
        [Key]
        public int ContactID { get; set; }

        [Display(Name = "نام")]
        [Required]
        [MaxLength(150)]
        public string FullName { get; set; }

        [Display(Name = "ایمیل")]
        [Required]
        [MaxLength(200)]
        public string Email { get; set; }

        [Display(Name = "پیام")]
        [Required]
        [MaxLength(900)]
        public string Message { get; set; }

        [Display(Name = "تاریخ ثبت")]
        public DateTime CreateDate { get; set; } = DateTime.Now;

        [Display(Name = "وضعیت")] 
        public bool IsShow { get; set; } = false;
    }
}
