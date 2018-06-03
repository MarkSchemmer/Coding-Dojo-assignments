using System;
using System.Linq;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static rnd = new Random();

        static int[] randArray() => Enumerable.Range(0,10).Select(x => rnd.Next(5,26)).ToArray();

        static string CoinFlip() => rnd.Next(0,2) == 0 ? 'Heads': 'Tails';

        static string[] names()
        {
            var set = new HashSet<string>();
            var name = new string[] {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            while(set.Count()<name.Count())
                set.Add(name[rnd.Next(0,name.Count()+1)]);
            return set.ToArray();
            
        }



        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
