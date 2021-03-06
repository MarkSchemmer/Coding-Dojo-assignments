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
        [UniqueEmail]
        [RegularExpression("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$", ErrorMessage="Please enter a valid email")]
        public string Email { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 8, ErrorMessage = "field must be atleast 8 and less than 105")]
        public string Password { get; set; }
    }


    public class UniqueEmailAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext ValidationContext)
        {
            var _ = (UserContext) ValidationContext.GetService(typeof(UserContext));
            var EmailCheck = !(_.users.Any(user => user.Email == (string)value));
            if(EmailCheck)
                return ValidationResult.Success;
            else
                return new ValidationResult("Email is already registered");
        }
    }


    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}