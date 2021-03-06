using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SiteMe.Models.Entities;
using SiteMe.Models.ViewModels;

namespace SiteMe.Models.Interfaces
{
    public interface IContact
    {
        Task AddContactMessage(ContactViewModel contact);
        Task<bool> ExistIP(string ip);
        Task<IEnumerable<GetAllMessagesViewModel>> GetAllMessages();
        Task ChangeShowMessage(int contactID);
        Task DeleteMessage(int contactID);
        Task<AdminViewModel> GetAdminPanelInfo();
    }
}
