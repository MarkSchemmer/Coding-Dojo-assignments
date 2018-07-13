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
    /*
            regex string....
            ([a-zA-Z]+)([0-9]+)([!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)
     */

    public class User
    {

        [Key]
        public int UserId { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string Name { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string Alias { get; set; }

        [Required]
        [UniqueEmail]
        [RegularExpression("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$", ErrorMessage="Please enter a valid email")]
        public string Email { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 8, ErrorMessage = "field must be atleast 8 and less than 105")]
        public string Password { get; set; }

        public List<Post> PostsCreated {get; set;}

        public User()
        {
          PostsCreated = new List<Post>();
        }
    }



    public class Post
    {
        [Key]
        public int PostId{get; set;}

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string Description{get;set;}

        public User creator {get; set;}

        public List<Like> Likes {get;set;}

        public Post()
        {
            Likes = new List<Like>();
        }

    }


    public class Like
    {
        [Key]
        public int LikeId {get; set;}

        public int PostId {get; set;}

        public Post post {get; set;}

        public int UserId {get; set;}

        public User user {get; set;}

    }


    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}