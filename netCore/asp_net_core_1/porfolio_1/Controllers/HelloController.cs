    using Microsoft.AspNetCore.Mvc;
    namespace porfolio_1.Controllers     //be sure to use your own project's namespace!
    {
        public class HelloController : Controller   //remember inheritance??
        {
            //for each route this controller is to handle:
            [HttpGet]       //type of request
            [Route("")]     //associated route string (exclude the leading /)
            public IActionResult Index()
            {
                return View("base");
            }

            [HttpGet]
            [Route("projects")]
            public string project()
            {
                return "Welcome to the projects page hello world contorleer";
            }

            [HttpGet]
            [Route("contact")]
            public string concats()
            {
                return "This is my Concat! controller ";
            }
        }
    }
