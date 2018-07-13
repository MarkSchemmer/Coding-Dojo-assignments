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
                    ViewBag.acts = _.activitys.Include(x => x.creator).Include(x => x.participants).ToList();
                    ViewBag.auth = true;
                    return View("About",user);
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }


        public IActionResult AddActivity()
        {
            int? UserId = HttpContext.Session.GetInt32("User_Id");
            if(UserId.HasValue)
            {
                ViewBag.auth = true;
                ViewBag.act = true;
                return View("Activity");
            }
            else
            {    
                return RedirectToAction("Index");
            }
        }

         public IActionResult ViewAct(int Id)
         {
             var UserId = HttpContext.Session.GetInt32("User_Id");
             if(UserId.HasValue)
             {
                 var activity = _.GetActById(Id);
                 ViewBag.CurUser = _.GetUserById((int)UserId);
                 ViewBag.act = true;
                 ViewBag.auth = true;
                 return View("ViewAct", activity);
             }
             else
             {
                 return RedirectToAction("Index");
             }
             
         }


        public IActionResult CreateAct(_Activity activity)
        {
            int? UserId = HttpContext.Session.GetInt32("User_Id");
            if(UserId.HasValue)
            {
                var user = _.GetUserById((int)UserId);
                if(ModelState.IsValid)
                {
                    _.AddAct(activity, user);
                    return RedirectToAction("ViewAct", new {Id=activity._ActivityId});
                }
                else 
                {
                    ViewBag.a = true;
                    return View("Activity", activity);
                }
            }
            else
            {
                return RedirectToAction("Index");
            }
        }


        public IActionResult JoinAct(int user, int activity)
        {
            var curUser = _.GetUserById(user);
            var act = _.GetActById(activity);
            _.JoinActivity(curUser, act);
            return RedirectToAction("ViewAct",new {Id=activity});
        }

           public IActionResult JoinActStay(int user, int activity)
        {
            var curUser = _.GetUserById(user);
            var act = _.GetActById(activity);
            _.JoinActivity(curUser, act);
            return RedirectToAction("About");
        }

       
        public IActionResult LeaveAct(int user, int activity)
        {
            var curUser = _.GetUserById(user);
            var act = _.GetActById(activity);
            _.LeaveActivity(curUser, act);
            return RedirectToAction("ViewAct",new {Id=activity});
        }


        public IActionResult LeaveActStay(int user, int activity)
        {
            var curUser = _.GetUserById(user);
            var act = _.GetActById(activity);
            _.LeaveActivity(curUser, act);
            return RedirectToAction("About");
        }

        public IActionResult DeleteAct(int user, int activity)
        {
            var curUser = _.GetUserById(user);
            var act = _.GetActById(activity);
            _.DeleteActivity(curUser, act);
            return RedirectToAction("About");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
