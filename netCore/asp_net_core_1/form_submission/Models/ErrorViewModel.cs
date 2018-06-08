using System;
using System.ComponentModel.DataAnnotations;

namespace dojo_survey.Models
{
public class User
{
     [Required]
     [StringLength(1000, MinimumLength = 4, ErrorMessage = "field must be atleast 4 characters")]
     public string firstName {get;set;}

     [Required]
     [StringLength(1000, MinimumLength = 4, ErrorMessage = "field must be atleast 4 characters")]
     public string lastName {get;set;}

     [Required]
     [Range(0,100, ErrorMessage="Please enter age between 0 and 100")]
     public int age {get;set;}

    [Required]
    [RegularExpression("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$", ErrorMessage="Please enter a valid email")]
    public string email {get;set;}

    [Required]
    [StringLength(1000, MinimumLength = 8, ErrorMessage = "field must be atleast 8 characters")]
    public string password {get;set;}
}

    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}