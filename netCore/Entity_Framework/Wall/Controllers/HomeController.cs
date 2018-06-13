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


        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Index");
        }


        [HttpPost("reg")]
        public IActionResult reg(User user, string psconf)
        {
            if(ModelState.IsValid && psconf == user.Password){
                ViewBag.use = true;
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                HttpContext.Session.SetInt32("User_Id", user.UserId);
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
            var user = _context.GetByEmail(Email);
            if(user!=null && PasswordToCheck != null)
            {
                if(0 != Hasher.VerifyHashedPassword(user, user.Password, PasswordToCheck))
                {
                    ViewBag.use = true;
                    HttpContext.Session.SetInt32("User_Id", user.UserId);
                    return View("About", user);
                }
                else
                {
                    return RedirectToAction("Index", user);
                }
            }
            return View("Index");
        }


        [HttpPost("createPost")]
        public IActionResult createPost(string message)
        {
            var _message = new Message();
            var user = _context.GetUserByIdSession(HttpContext.Session.GetInt32("User_Id"));
            _message.message = message;
            _message.UserId = user.UserId;

            user.messages.Insert(0, _message);
            _context.SaveChanges();
            return View("About", user);
        }


         [HttpPost("createComment")]
        public IActionResult createComment(string comment, string MsgId)
        {
            var _comment = new Comment();
            var msg = _context.GetMessageById(Convert.ToInt32(MsgId));
            var user = _context.GetUserByIdSession(HttpContext.Session.GetInt32("User_Id"));
            _comment.comment = comment;
            _comment.UserId = user.UserId;
            _comment.MessageId = msg.MessageId;

            user.comments.Insert(0, _comment);

            _context.SaveChanges();
            return View("About", user);
        }

        public IActionResult About()
        {
           // var user = _context.users.Where(x => x.Id == HttpContext.Session.GetInt32("User_Id")).FirstOrDefault();
            var user_2 = _context.GetUserByIdSession(HttpContext.Session.GetInt32("User_Id"));
            return View(user_2);
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
