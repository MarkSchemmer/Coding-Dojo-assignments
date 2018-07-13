using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using login_registration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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
            ViewBag.act = false;
            return View("Index");
        }


        public IActionResult reg(User user, string psconf)
        {
            if(ModelState.IsValid && psconf == user.Password){
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _.AddUser(user);
                HttpContext.Session.SetInt32("User_Id", user.UserId);
                return RedirectToAction("About");
            }
            else
            {
                ViewBag.psconf = psconf == user.Password ? false : true;
                return View("Index", user);
            }
        }
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
                else
                {
                    ViewBag.errors = true;
                    return View("Index");
                }
            }
            ViewBag.errors = true;
            return View("Index");
        }

        public IActionResult About()
        {
            int? UserId = HttpContext.Session.GetInt32("User_Id");
            if(UserId.HasValue)
            {
                    var user = _.GetUserById((int)UserId);
                    ViewBag.auth = true;
                    ViewBag.posts = _.posts.Include(x => x.creator).Include(x => x.Likes);
                    return View("About",user);
            }
            else
            {
                return RedirectToAction("Index");
            }
        }


        [HttpGet("users/{Id}")]
        public IActionResult usersPage(int Id)
        {
            var user = _.GetUserById(Id);
            var totolLikes = user.PostsCreated.Aggregate(0 , (sum, post) => sum += post.Likes.Count);
            ViewBag.auth = true;
            ViewBag.act = true;
            ViewBag.Likes = totolLikes;
            return View("users",user);
        }



        [HttpGet("idea/{Id}")]
        public IActionResult idea(int Id)
        {
            var post = _.GetPostById(Id);
            ViewBag.auth = true;
            ViewBag.act = true;
            return View("idea", post);
        }


        [HttpGet("like/{Id}/{PostId}")]
        public IActionResult like(int Id, int PostId)
        {
            var user = _.GetUserById(Id);
            var post = _.GetPostById(PostId);
            _.LikePost(user, post);
            return RedirectToAction("About");
        }


        public IActionResult CreateIdea(string desc)
        {
            var user = _.GetUserById((int)HttpContext.Session.GetInt32("User_Id"));
            _.CreatePost(desc, user);
            return RedirectToAction("About");
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
