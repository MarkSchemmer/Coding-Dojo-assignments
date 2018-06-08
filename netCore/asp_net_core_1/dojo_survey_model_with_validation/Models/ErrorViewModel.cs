using System;
using System.ComponentModel.DataAnnotations;

namespace dojo_survey.Models
{


public class Ninja
{
    [Required]
    [StringLength(15, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 15")]
     public string Name {get;set;}

     [Required]
     public string Location {get;set;}

     [Required]
     [StringLength(15, MinimumLength = 2, ErrorMessage = "field must be atleast 2 and less than 15")]
     public string Language {get;set;}

     [Required]
     [StringLength(30, MinimumLength = 8, ErrorMessage = "field must be atleast 8 and less than 30")]
     public string Comment {get;set;}
}




    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}