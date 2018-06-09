using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dojo_dachi.Models;

namespace dojo_dachi.Controllers
{


    public class HomeController : Controller
    {
      public static Pet pet = new Pet();

        public IActionResult Index()
        {
            return View(pet);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        [HttpGet]
        [Route("action/{feed}")]
        public Pet feed(string feed)
        {
           switch(feed)
           {
               case "feed": pet.feed(); Console.WriteLine("I'm hungrynow");
               break;
               case "play": pet.play(); 
               break;
               case "sleep":pet.sleep();
               break;
               case "work":pet.work();
               break;
           }

        return pet;
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
