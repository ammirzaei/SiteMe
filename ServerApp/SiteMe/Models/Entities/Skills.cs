using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.Entities
{
    public class Skills
    {
        [Key]
        public int SkillID { get; set; }

        [Display(Name = "عنوان مهارت")]
        [Required]
        [MaxLength(100)]
        public string SkillTitle { get; set; }

        [Display(Name = "درصد مهارت")]
        [Required]
        [MaxLength(3)]
        public int SkillPercent { get; set; }
    }
}
