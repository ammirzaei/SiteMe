using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiteMe.Models.Context;
using SiteMe.Models.Interfaces;
using SiteMe.Models.ViewModels;

namespace SiteMe.Models.Services
{
    public class AuthService : IAuth
    {
        private readonly SiteMeContext db;
        public AuthService(SiteMeContext db)
        {
            this.db = db;
        }
        public async Task<bool> ExistUser(LoginViewModel login)
        {
            return await db.Setting.AnyAsync(s =>
                s.UserNameAdmin.ToLower().Contains(login.UserName) &&
                s.PasswordAdmin.ToLower().Contains(login.Password));
        }
    }
}
