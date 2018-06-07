using System;

namespace view_model_fun.Models
{



    public class User
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
    }



    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}