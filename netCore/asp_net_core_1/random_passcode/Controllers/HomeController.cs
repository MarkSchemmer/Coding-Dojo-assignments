using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using random_passcode.Models;

namespace random_passcode.Controllers
{
    public class HomeController : Controller
    {


        public Random rnd = new Random();
        public IActionResult Index()
        {
         
            return View();
        }


        [HttpGet]
        [Route("genWord")]
        public string RandomPasscode()
        {
            var numbs = Enumerable.Range(0,10).Select(x => x.ToString()).ToList();
            var letts = Enumerable.Range(0,26).Select(x => Convert.ToChar(97+x).ToString()).ToList();
            var numbsAndLets = new List<List<string>> { numbs, letts }.SelectMany(x => x).ToList();
            return Enumerable.Range(0,14).Select(x => numbsAndLets[rnd.Next(0,numbsAndLets.Count)] ).Aggregate("", (acc,cur) => acc + cur).ToUpper();
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

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
