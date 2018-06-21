using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.Models
{
    public static class API 
    {
        public static void AddProduct(this UserContext _context, Product product)
        {
            _context.products.Add(product);
            _context.SaveChanges();
        }

        public static List<Product> GetProducts(this UserContext _context) => _context.products.ToList();

        public static List<Customer> GetCustomers(this UserContext _context) => _context.customers.ToList();

        public static List<Order> GetOrders(this UserContext _context) => _context.orders.ToList();


        public static List<Product> filter(this UserContext _context, string item)
        {
            return _context.products.Where(x => x.Name.Contains(item)).ToList();
        }

        public static List<Customer> filterCustomer(this UserContext _context, string item)
        {
            return _context.customers.Where(x => x.Name.Contains(item)).ToList();
        }


        public static List<Order> filterOrder(this UserContext _context, string item)
        {
          return _context.orders.Include(x => x.customer).Where(x => x.customer.Name.Contains(item)).ToList();
        }

        public static void AddOrder(this UserContext _context, Order order)
        {
            _context.orders.Add(order);
            _context.SaveChanges();
        }


        public static void AddCustomer(this UserContext _context, Customer customer)
        {
            _context.customers.Add(customer);
            _context.SaveChanges();
        }

        public static void DeleteCustomer(this UserContext _context, int customerId)
        {
            var customer = _context.customers.FirstOrDefault(x => x.CustomerId == customerId);
            _context.customers.Remove(customer);
            _context.SaveChanges();
        }
    }
}