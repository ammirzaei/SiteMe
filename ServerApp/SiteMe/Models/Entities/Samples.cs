using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.Entities
{
    public class Samples
    {
        [Key]
        public int SampleID { get; set; }

        [Display(Name = "عنوان")]
        [Required]
        [MaxLength(150)]
        public string SampleTitle { get; set; }

        [Display(Name = "تصویر")]
        [Required]
        [MaxLength(50)]
        public string SampleImage { get; set; }

        [Display(Name = "توضیحات")]
        [Required]
        [MaxLength(500)]
        public string SampleDescription { get; set; }

        [Display(Name = "آدرس")]
        [MaxLength(150)]
        [DataType(DataType.Url)]
        public string SampleUrl { get; set; }
    }
}
