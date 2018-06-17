using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

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

        public DbSet<Wedding> weddings { get; set; }


        public DbSet<Guest> guests {get; set;}

        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

   
    }

    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string LastName { get; set; }

        [Required]
        [RegularExpression("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$", ErrorMessage="Please enter a valid email")]
        public string Email { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 8, ErrorMessage = "field must be atleast 8 and less than 105")]
        public string Password { get; set; }

        public Wedding MyWedding {get; set;}

        public bool HasMadeWedding { get; set; }



        public User()
        {
            HasMadeWedding = false;
        }

    }


    public class Wedding
    {
        [Key]
        public int WeddingId {get; set;}

        public User user {get; set;}

        public int UserId {get; set;}

        [Required]
        public string WedderOneName { get; set; }

        [Required]
        public string WedderTwoName { get; set; }

        public DateTime  date {get; set;}

        [Required]
        [RegularExpression("^\\d{2}-\\d{2}-\\d{4}$", ErrorMessage="Enter date in correct format")]
        public string StringDate {get; set;}


        public string DisplayDate {get; set;}


        [Required]
        public string address {get; set;}


        [Required]
        public List<Guest> guests {get; set;}


        public bool Contains(User user)
        {
            return this.guests.Any(x => x.user.UserId == user.UserId );
        }


        public Wedding()
        {
            guests = new List<Guest>();
        }

    }


    public class Guest
    {
        [Key]
        public int GuestId { get; set; }

        public User user { get; set; }

        public int WeddingId { get; set; }

        public Wedding WeddingToAttend { get; set; }
    }





    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }



    public static class api
    {
        public static User GetUserByEmail(this UserContext _context, string Email)
        {
            return _context.users
            .Include(x => x.MyWedding)
            .ThenInclude(x => x.guests)
            .Where(x => x.Email == Email).FirstOrDefault();
        }

        public static User GetUserById(this UserContext _context, int? Id)
        {
            return _context.users
            .Include(x => x.MyWedding)
            .ThenInclude(x => x.guests)
            .Where(x => x.UserId == Id).FirstOrDefault();
        }

        public static bool DuplicateEmail(this UserContext _context, string Email)
        {
            return _context.users.Any(x => x.Email == Email);
        }


        public static List<Wedding> allWeddings(this UserContext _context) 
        {
            return _context.weddings
            .Include(x => x.user)
            .ThenInclude(x => x.MyWedding)
            .ThenInclude(x => x.guests)
            .ToList();
        }

        public static Wedding GetWeddingById(this UserContext _context, int Id)
        {
            return _context.weddings
            .Include(x => x.user)
            .ThenInclude(x => x.MyWedding)
            .ThenInclude(x => x.guests)
            .FirstOrDefault(x => x.WeddingId == Id);
        }
    }

}