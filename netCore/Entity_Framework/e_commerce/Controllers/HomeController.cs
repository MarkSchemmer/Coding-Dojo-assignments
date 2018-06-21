using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using e_commerce.Models;

namespace e_commerce.Controllers
{
    public class HomeController : Controller
    {

        private UserContext _context { get; set; }

        public HomeController(UserContext context)
        {
            this._context = context;
        }

        public IActionResult Index()
        {
            ViewBag.products = _context.GetProducts();
            ViewBag.customers = _context.GetCustomers();
            ViewBag.orders = _context.GetOrders();
            return View();
        }


        public IActionResult MakeOrder(Order order)
        {
            _context.AddOrder(order);   
            return RedirectToAction("Order");
        }

        public IActionResult Order()
        {
            ViewBag.customers = _context.GetCustomers();
            ViewBag.products = _context.GetProducts();
            ViewBag.orders = _context.GetOrders();
            return View("Order");
        }

        public IActionResult OrderSearch(string item)
        {
            ViewBag.customers = _context.GetCustomers();
            ViewBag.products = _context.GetProducts();
            ViewBag.orders = item == null ? _context.orders.ToList() : _context.filterOrder(item);
            return View("Order");
        }


        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        public IActionResult product()
        {
            ViewBag.products = _context.GetProducts();
            return View("product");
        }

 
        public IActionResult createProduct(Product product)
        {
            if(ModelState.IsValid)
            {
                _context.AddProduct(product);
                return RedirectToAction("product");
            }
            else 
            {
                return View("product", product);
            }
        }

        public IActionResult createCustomer(Customer customer)
        {
            var exists = _context.customers.Any(x => x.Name == customer.Name);
            if(ModelState.IsValid && !exists)
            {
                _context.AddCustomer(customer);
                return RedirectToAction("Customer");
            }
            else
            {
                ViewBag.customers  = _context.GetCustomers();
                ViewBag.duplicateCustomer = true;
                return View("Customer", customer);
            }
        }

        public IActionResult filterSearch(string item)
        {
           
            ViewBag.products = item == null ? _context.products.ToList() : _context.filter(item);
            return View("product");
        }

           public IActionResult CustomerSearch(string item)
        {
           
            ViewBag.customers = item == null ? _context.GetCustomers() : _context.filterCustomer(item);
            return View("Customer");
        }


        public IActionResult Customer()
        {
            ViewBag.customers = _context.GetCustomers();
            return View("Customer");
        }

        public IActionResult DeleteCustomer(int CustId)
        {
            _context.DeleteCustomer(CustId);
            return RedirectToAction("Customer");
        }
    }
}
