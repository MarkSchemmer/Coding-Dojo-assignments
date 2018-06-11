using System;

namespace RESTauranter
{
    public class Review
    {
        public int Id { get; set; }
        public string ReviewerName { get; set; }
        public string ResturantName { get; set; }
        public string _Review { get; set; }
        public int Rating { get; set; }
        public DateTime visit { get; set; }
    }
}