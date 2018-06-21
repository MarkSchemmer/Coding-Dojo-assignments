using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using login_registration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

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
            ViewBag.DuplicateEmail = null;
            var dup = _context.DuplicateEmail(user.Email);
            if(dup)
                ViewBag.DuplicateEmail = true;
            
            if(ModelState.IsValid && psconf == user.Password && !dup)
            {
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _context.users.Add(user);
                _context.SaveChanges();
                var user_id = _context.GetUserByEmail(user.Email);
                HttpContext.Session.SetInt32("User_Id", user_id.UserId);
                return RedirectToAction("About");
            }
            else
            {
                ViewBag.psconf = "Passwords must match";
                ViewBag.error = "true";
                return View("Index", user);
            }
        }

        [HttpPost("login")]
        public IActionResult login(string Email, string PasswordToCheck)
        {
            var Hasher = new PasswordHasher<User>();
            var user = _context.GetUserByEmail(Email);
            ViewBag.errors = true;
            if(user!=null && PasswordToCheck != null)
            {
                if(0 != Hasher.VerifyHashedPassword(user, user.Password, PasswordToCheck))
                {
                    HttpContext.Session.SetInt32("User_Id", user.UserId);
                    ViewBag.errors = false;
                    ViewBag.auth = true;
                    return RedirectToAction("About");
                }
                else
                {
                    return View("Index", user);
                }
            }
            return View("Index", user);
        }

        [HttpGet("Home/About")]
        public IActionResult About()
        {
            int? User_Id = HttpContext.Session.GetInt32("User_Id");
            if(User_Id.HasValue)
            {
                var user = _context.GetUserById(User_Id);
                ViewBag.auth = true;
                ViewBag.weddings = _context.allWeddings();
                return View("About", user);
            }
            else 
            {
                return View("Index");
            }
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Plan()
        {
            int? User_Id = HttpContext.Session.GetInt32("User_Id");
            if(User_Id.HasValue)
            {
                var user = _context.GetUserById(User_Id);
                ViewBag.auth = true;
                ViewBag.plan = true;
                ViewBag.user = user;
                return View("Plan");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpPost]
        public IActionResult CreateWedding(Wedding wedding)
        {
            
            int? User_Id = HttpContext.Session.GetInt32("User_Id");
            var user = _context.GetUserById(User_Id);
            wedding.date = DateTime.ParseExact(wedding.StringDate, "MM-dd-yyyy", CultureInfo.InvariantCulture);
            wedding.DisplayDate = String.Format("{0:dddd, MMMM d, yyyy}", wedding.date);
            bool correctDate = wedding.date > DateTime.Now;
            if(User_Id.HasValue && ModelState.IsValid && correctDate)
            {
                ViewBag.auth = true;
                user.HasMadeWedding = true;
                user.MyWedding = wedding;
                wedding.user = user;
                wedding.UserId = user.UserId;

                _context.SaveChanges();
                return RedirectToAction("About");
            }
            else 
            {
                System.Console.WriteLine("Errors");
                ViewBag.futDate = true;
                return View("Plan", wedding);
            }
        }



        public IActionResult Delete()
        {
            var user = _context.GetUserById(HttpContext.Session.GetInt32("User_Id"));
            user.HasMadeWedding = false;
            var usersWedding = user.MyWedding;
            _context.weddings.Remove(usersWedding);
            _context.SaveChanges();
            return RedirectToAction("About");
        }


        public IActionResult rsvp(int wedd)
        {
            var user = _context.GetUserById(HttpContext.Session.GetInt32("User_Id"));
            var weddingTakingPlace = _context.GetWeddingById(wedd);
            var guest = new Guest {user=user, WeddingId=wedd, WeddingToAttend=weddingTakingPlace};
            weddingTakingPlace.guests.Add(guest);
            _context.SaveChanges();
            System.Console.WriteLine(weddingTakingPlace.user.FirstName);
            return RedirectToAction("About");
        }


        public IActionResult unrsvp(int wedd)
        {
            var user = _context.GetUserById(HttpContext.Session.GetInt32("User_Id"));
            var weddingTakingPlace = _context.GetWeddingById(wedd);
            var guest = _context.guests.Include(x => x.user).Where(x => x.user.UserId == user.UserId).FirstOrDefault();
            weddingTakingPlace.guests.Remove(guest);
            _context.SaveChanges();
            return RedirectToAction("About");
        }

        public IActionResult wedInfo(int wedd)
        {
            int? User_Id = HttpContext.Session.GetInt32("User_Id");

            if(User_Id.HasValue){
                var user = _context.GetUserById(User_Id);
                var wedding = _context.GetWeddingById(wedd);
                ViewBag.auth = true;
                ViewBag.plan = true;

                ViewBag.people = _context.guests      
                .Include(x => x.user)
                .Where(x => x.WeddingId == wedd)
                .ToList();

                return View("Info", wedding);
            } else{
                return RedirectToAction("Index");
            }
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
