using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using login_registration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace login_registration.Controllers
{
    public class HomeController : Controller
    {

        private UserContext _context {get; set;}

        public HomeController(UserContext context)
        {
            this._context = context;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpPost("reg")]
        public IActionResult reg(User user, string psconf)
        {
            if(ModelState.IsValid && psconf == user.Password){
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                HttpContext.Session.SetInt32("User_Id", user.Id);
                user.Password = Hasher.HashPassword(user, user.Password);
                _context.users.Add(user);
                _context.SaveChanges();
                return View("About", user);
            }else{
                return RedirectToAction("Index", user);
            }
        }

        [HttpPost("login")]
        public IActionResult login(string Email, string PasswordToCheck)
        {
            var Hasher = new PasswordHasher<User>();
            var user = _context.users.Where(x => x.Email == Email).FirstOrDefault();
            if(user!=null && PasswordToCheck != null)
            {
                if(0 != Hasher.VerifyHashedPassword(user, user.Password, PasswordToCheck))
                {
                    HttpContext.Session.SetInt32("User_Id", user.Id);
                    return View("About", user);
                }
                else
                {
                    return RedirectToAction("Index", user);
                }
            }
            return View("Index");
        }

        public IActionResult About()
        {
            var user = _context.users.Where(x => x.Id == HttpContext.Session.GetInt32("User_Id")).FirstOrDefault();
            return View(user);
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
    }
}
