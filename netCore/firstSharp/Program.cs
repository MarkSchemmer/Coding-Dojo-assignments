using System;
using System.Linq;

namespace firstSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Enumerable.Range(0,20).ToList().ForEach(x => {
                Console.WriteLine(x);
            });
        }
    }
}
