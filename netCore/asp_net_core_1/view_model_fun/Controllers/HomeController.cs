using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using view_model_fun.Models;

namespace view_model_fun.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            string msg = "A very long message passed to the the view from the controller";
            ViewBag.msg = msg;
            return View("Index", msg);
        }

        public Random rnd = new Random();

        public IActionResult Number()
        {
            List<int> numbers = Enumerable.Range(1,rnd.Next(20,30)).Select(x => rnd.Next(0,100)).ToList();

            return View("Number", numbers);
        }

        public IActionResult User()
        {
            var user = new User{firstName="Moose", lastName = "Phillips"};

            return View("User", user);
        }


        public IActionResult Users()
        {
            var users = new List<User>(){
                new User{firstName="jim", lastName="boe"},
                new User{firstName="Gusti", lastName="Avoito"}
            };

            return View("Users", users);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
