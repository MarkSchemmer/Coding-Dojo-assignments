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
        [RegularExpression("[a-zA-Z]{2,}", ErrorMessage="First name cannot contain numeric characters")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        [RegularExpression("[a-zA-Z]{2,}", ErrorMessage="Last name cannot contain numeric characters")]
        public string LastName { get; set; }

        [Required]
        [UniqueEmail]
        [RegularExpression("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$", ErrorMessage="Please enter a valid email")]
        public string Email { get; set; }

        [Required]
        [ContainsSpecialChars]
        [StringLength(105, MinimumLength = 8, ErrorMessage = "field must be atleast 8 and less than 105")]
        public string Password { get; set; }


        public List<Particpant> activitysParticipatingIn {get; set;}


        public List<_Activity> activitysCreated {get; set;}


        public bool CanDelete(_Activity activiy)
        {
            return activitysCreated.Any(x => x._ActivityId == activiy._ActivityId);
        }

        public User()
        {
            activitysCreated = new List<_Activity>();
            activitysParticipatingIn = new List<Particpant>();
        }


 
    }



    public class _Activity
    {
        [Key]
        public int _ActivityId{get; set;}

        [Required]
        [StringLength(105, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 105")]
        public string Title{get;set;}

        [Required]
        [DataType(DataType.Time)]
        [DisplayFormat(DataFormatString="{0:hh:mm tt}", ApplyFormatInEditMode=true)]
        public DateTime Time {get; set;}

        [Required]
        [FutureDate]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString="{0:MM-dd-yyyy}", ApplyFormatInEditMode=true)]
        public DateTime Date {get; set;}


        [Required]
        public int Duration {get; set;}

        [Required]
        public string DurationFormat {get; set;}

        public int UserId {get; set;}

        public User creator {get; set;}


        public List<Particpant> participants {get;set;}

        [Required]
        [StringLength(105, MinimumLength = 10, ErrorMessage = "field must be atleast 10 and less than 105")]
        public string Description {get; set;}


        public int participantsCount(_Activity activity)
        {
            return activity.participants.Count;
        }


        public bool GoingToEvent(User user, _Activity activity)
        {
           return  activity.participants.Any(x => x.UserId == user.UserId);
        }

        public _Activity()
        {
            participants = new List<Particpant>();
        }

    }


    public class Particpant
    {
        [Key]
        public int ParticpantId {get; set;}


        public int UserId {get; set;}

        public User user {get; set;}

        public int _ActivityId {get; set;}

        public _Activity ActivityAttending {get; set;}

    }


    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}