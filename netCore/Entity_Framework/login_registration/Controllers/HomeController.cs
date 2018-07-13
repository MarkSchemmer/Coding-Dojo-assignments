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

        private UserContext _ {get; set;}

        public HomeController(UserContext context)
        {
            this._ = context;
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
                  user.Password = Hasher.HashPassword(user, user.Password);
                  _.AddUser(user);
                  HttpContext.Session.SetInt32("User_Id", user.UserId);
                return RedirectToAction("About");
            }else{
                ViewBag.psconf = psconf == user.Password ? false : true;
                return View("Index", user);
            }
        }

        [HttpPost("login")]
        public IActionResult login(string Email, string PasswordToCheck)
        {
            var Hasher = new PasswordHasher<User>();
            var user = _.GetUserByEmail(Email);
            if(user!=null && PasswordToCheck != null)
            {
                if(0 != Hasher.VerifyHashedPassword(user, user.Password, PasswordToCheck))
                {
                    HttpContext.Session.SetInt32("User_Id", user.UserId);
                    return RedirectToAction("About");
                }
            }
            ViewBag.login_error = true;
            return View("Index");
        }

        public IActionResult About()
        {
          var User_Id = HttpContext.Session.GetInt32("User_Id");
          if(User_Id.HasValue){
              var user = _.GetUserById((int)User_Id);
              return View("About", user);
          }else{
              return View("Index");
          }
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
