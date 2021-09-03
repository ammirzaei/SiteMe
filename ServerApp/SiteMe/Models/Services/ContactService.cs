﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
            return await db.Contact.AnyAsync(c => c.IP == ip && c.IsShow == false);
        }

        public async Task<IEnumerable<Contact>> GetAllMessages()
        {
            return await db.Contact.OrderByDescending(c => c.CreateDate).ToListAsync();
        }
    }
}
