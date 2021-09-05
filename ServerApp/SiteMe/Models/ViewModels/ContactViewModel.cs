using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.ViewModels
{
    public class ContactViewModel
    {
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

        [Display(Name = "آی پی")]
        [Required]
        [MaxLength(50)]
        public string IP { get; set; }
    }

    public class GetAllMessagesViewModel
    {
        public int ContactID { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string IP { get; set; }
        public string CreateDate { get; set; }
        public bool IsShow { get; set; }
    }
}
