using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiteMe.Models.Entities;

namespace SiteMe.Models.Context
{
    public class SiteMeContext : DbContext
    {
        public SiteMeContext(DbContextOptions<SiteMeContext> options) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public DbSet<Setting> Setting { get; set; }
        public DbSet<Samples> Samples { get; set; }
        public DbSet<Contact> Contact { get; set; }
        public DbSet<Skills> Skills { get; set; }
    }
}
