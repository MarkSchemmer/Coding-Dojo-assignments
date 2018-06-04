using System;
using System.Linq;
using System.Collections.Generic;
namespace sigma_c_
{
    class Program
    {

        static int sigma(int num) => Enumerable.Range(1,num).Aggregate(0,(acc, cur) => acc + cur);


        static void Main(string[] args)
        {
            var value = sigma(20);
            System.Console.WriteLine(value);
            Console.WriteLine("Hello World!");
        }
    }
}
