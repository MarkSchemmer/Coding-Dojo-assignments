using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

/*
        dotnet ef database update
        dotnet ef migrations add -name 
        commands for migrating and updating database!
 */

namespace login_registration.Models
{
 public class UserContext : DbContext
    {
        public DbSet<User> users { get; set; }

        public DbSet<Account> accounts {get; set;}

        public DbSet<Transaction> transactions {get; set;}

        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.account)
                .WithOne(a => a.user)
                .HasForeignKey<Account>(a => a.UserId);

        }
    }




    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}