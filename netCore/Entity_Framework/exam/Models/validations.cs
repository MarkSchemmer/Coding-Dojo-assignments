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
    public class ContainsSpecialCharsAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext ValidationContext)
        {
            var _ = (UserContext) ValidationContext.GetService(typeof(UserContext));
            var str = value as string;
            if(String.IsNullOrEmpty(str))
            {
                return new ValidationResult(
                "Password is is null or Empty, also"+
                " must contain a special character ");
            }
            var chars = "[!@#$%^&*()_+-=[]{};':|,.<>/?]0123456789".ToCharArray();
            var PasswordCheck = (str.Any(x => chars.Contains(x)));
            if(PasswordCheck)
                return ValidationResult.Success;
            else
                return new ValidationResult("Password must contain a letter number and special character");
        }
    }

    public class UniqueEmailAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext ValidationContext)
        {
            var _ = (UserContext) ValidationContext.GetService(typeof(UserContext));
            var EmailCheck = !(_.users.Any(user => user.Email == (string)value));
            if(EmailCheck)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("Email is already registered");
            }
        }
    }

    public class FutureDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext ValidationContext)
        {
            var _ = (UserContext) ValidationContext.GetService(typeof(UserContext));
            var date = (DateTime)value;
            var timeNow = DateTime.Now;
            var FutureDate = date > timeNow;
            if(FutureDate)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("Date Must be set in the future");
            }
        }
    }
}