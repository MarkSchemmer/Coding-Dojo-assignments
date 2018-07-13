using System;
using System.Linq;
using System.Collections.Generic;
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

        public DbSet<Post> posts {get; set;}

        public DbSet<Like> likes {get; set;}
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
    }
}