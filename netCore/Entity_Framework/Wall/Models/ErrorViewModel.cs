using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

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

        public DbSet<Message> messages  { get; set; }
        public DbSet<Comment> comments { get; set; }  

        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
    }

    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}