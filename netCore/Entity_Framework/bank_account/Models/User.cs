using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;


namespace login_registration.Models
{
    public class User
    {
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

        public Account account {get; set;}
    }

    public class Transaction
    {
        public int Id {get; set;}
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public int Difference {get; set;}

        public string StringDiff {get; set;}

        public string TransactionType { get; set; }
    }


    public class Account
    {
        public int AccountId { get; set; }
        public int UserId { get; set; }
        public User user {get; set;}


        public int Balance {get; set;}

        public List<Transaction> transactions {get; set;}

   

        public Account()
        {
            transactions = new List<Transaction>();
        }

    }
}