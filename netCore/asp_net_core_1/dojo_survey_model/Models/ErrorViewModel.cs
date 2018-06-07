using System;

namespace dojo_survey.Models
{


public class Ninja
{
     public string Name {get;set;}
     public string Location {get;set;}
     public string Language {get;set;}
     public string Comment {get;set;}
}




    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}