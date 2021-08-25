using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SiteMe.Models.ViewModels;

namespace SiteMe.Models.Interfaces
{
    public interface IAuth
    {
        Task<bool> ExistUser(LoginViewModel login);
    }
}
