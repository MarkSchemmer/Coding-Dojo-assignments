using System;
using System.Collections.Generic;
using System.Linq;
namespace wiz_sam_ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Samurai> sam = new List<Samurai>();
            for(var i = 0; i < 100; i++)
                sam.Add(new Samurai(""+i));

            System.Console.WriteLine(Samurai.HowManySamurai());

        }
    }
}
