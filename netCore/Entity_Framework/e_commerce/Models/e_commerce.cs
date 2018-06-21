using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace e_commerce.Models
{
    public class Customer
    {
        public int CustomerId {get; set;}

        [Required]
        public string Name {get; set;}

        public DateTime CreatedAt {get; set;}

        public string DisplayDate {get; set;}

        public List<Order> orders {get; set;}

        public Customer()
        {
            orders = new List<Order>();
            CreatedAt = DateTime.Now;
            DisplayDate = CreatedAt.ToString("MMMM dd, yyyy");
        }
    }


    public class Order
    {
        public int OrderId {get; set;}

        public int CustomerId {get; set;}

        public Customer customer {get; set;}

        public int AmountOrdered {get; set;}


        public int ProductId { get; set; }

        public Product product {get; set;}


        public DateTime OrderedAt {get; set;}

        public string DisplayDate {get; set;}

        public Order()
        {
            OrderedAt = DateTime.Now;
            DisplayDate = OrderedAt.ToString("MMMM dd, yyyy");
        }

        
    }

    public class Product
    {
        public int ProductId {get; set;}

        [Required]
        public string Name {get; set;}


        public string ImageUrl {get; set;}

        [Required]
        [StringLength(100, MinimumLength = 10, ErrorMessage = "field must be at least 10 chars and less than 100")]
        public string Description {get; set;}

        [Required]
        public int InitialQuantity {get; set;}

        public List<Order> orders {get; set;}

        public Product()
        {
            orders = new List<Order>();
        }
        

    }
}