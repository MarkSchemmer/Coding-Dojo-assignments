using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//using System.Data.Entity;

/*

        dotnet ef database update

        dotnet ef migrations add -name 


        commands for migrating and updating database!


 */

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

        public DateTime CreatedAt {get; set;}

        public DateTime UpdatedAt {get; set;}

        public List<Message> messages {get; set;}

        public List<Comment> comments {get; set;}

        public User()
        {
            messages = new List<Message>();
            comments = new List<Comment>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }

    }


    public class Message 
    {
        public int MessageId {get; set;}
        public string  message { get; set; }

        public DateTime CreatedAt {get; set;}

        public DateTime UpdatedAt {get; set;}

        public List<Comment> comments {get; set;}

        public User user {get; set;}

        public int UserId {get; set;}

        public Message()
        {
            comments = new List<Comment>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }

    }

    public class Comment 
    {
        public int CommentId {get; set;}

        public string comment { get; set; }

        public DateTime CreatedAt {get; set;}

        public DateTime UpdatedAt {get; set;}

        
        public User user {get; set;}

        public int UserId {get; set;}


        public Message message {get; set;}

        public int MessageId {get; set;}

        public Comment()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }

    }

}