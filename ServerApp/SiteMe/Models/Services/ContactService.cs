using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiteMe.Models.Classes;
using SiteMe.Models.Context;
using SiteMe.Models.Entities;
using SiteMe.Models.Interfaces;
using SiteMe.Models.ViewModels;

namespace SiteMe.Models.Services
{
    public class ContactService : IContact
    {
        private readonly SiteMeContext db;

        public ContactService(SiteMeContext db)
        {
            this.db = db;
        }
        public async Task AddContactMessage(ContactViewModel contact)
        {
            Contact model = new Contact()
            {
                FullName = contact.FullName,
                IP = contact.IP,
                Message = contact.Message,
                Email = contact.Email
            };
            await db.AddAsync(model);
            await db.SaveChangesAsync();
        }

        public async Task<bool> ExistIP(string ip)
        {
            return await db.Contact.AnyAsync(c => c.IP == ip && c.IsShow == false && c.IsDelete == false);
        }

        public async Task<IEnumerable<GetAllMessagesViewModel>> GetAllMessages()
        {
            return await db.Contact.Where(s => s.IsDelete == false).OrderByDescending(c => c.CreateDate).Select(c => new GetAllMessagesViewModel()
            {
                ContactID = c.ContactID,
                FullName = c.FullName,
                Email = c.Email,
                Message = c.Message,
                IP = c.IP,
                CreateDate = c.CreateDate.ToShamsi(),
                IsShow = c.IsShow
            }).ToListAsync();
        }

        public async Task ChangeShowMessage(int contactID)
        {
            var message = await db.Contact.FindAsync(contactID);
            message.IsShow = true;
            db.Update(message);
            await db.SaveChangesAsync();
        }

        public async Task DeleteMessage(int contactID)
        {
            var message = await db.Contact.FindAsync(contactID);
            message.IsDelete = true;
            db.Update(message);
            await db.SaveChangesAsync();
        }

        public async Task<AdminViewModel> GetAdminPanelInfo()
        {
            AdminViewModel model = new AdminViewModel()
            {
                DateNow = DateTime.Now.ToShamsiDate(),
                CountMessage = await db.Contact.CountAsync(c => c.IsDelete == false && c.IsShow == false)
            };
            return await Task.FromResult(model);
        }
    }
}
