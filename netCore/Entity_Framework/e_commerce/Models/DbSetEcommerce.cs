using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using e_commerce;

namespace e_commerce.Models
{
        public class UserContext : DbContext
    {
        public DbSet<Customer> customers { get; set; }

        public DbSet<Order> orders { get; set; }

        public DbSet<Product> products {get; set;}

        public UserContext(DbContextOptions<UserContext> options) : base(options) { }   
    }
}