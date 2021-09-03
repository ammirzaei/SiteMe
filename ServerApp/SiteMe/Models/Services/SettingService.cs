using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiteMe.Models.Context;
using SiteMe.Models.Entities;
using SiteMe.Models.Interfaces;

namespace SiteMe.Models.Services
{
    public class SettingService:ISetting
    {
        private readonly SiteMeContext db;
        public SettingService(SiteMeContext db)
        {
            this.db = db;
        }

        public async Task<Setting> GetSetting()
        {
            return await db.Setting.FirstAsync();
        }
    }
}
