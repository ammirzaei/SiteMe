using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SiteMe.Models.Entities;

namespace SiteMe.Models.Interfaces
{
    public interface ISetting
    {
        Task<Setting> GetSetting();
    }
}
