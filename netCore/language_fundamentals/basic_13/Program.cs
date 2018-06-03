using System;
using System.Linq;
using System.Collections.Generic;
namespace basic_13
{
    class Program
    {


        static void print_1_255() => Enumerable.Range(1,255).ToList().ForEach(x => Console.WriteLine(x));
        static void print_odd_1_255() => Enumerable.Range(1,255).Where(x => x%2!=0).ToList().ForEach(x => Console.WriteLine(x));
        static void PrintSum(int num) => Console.WriteLine(Enumerable.Range(1,num).Aggregate((acc, cur) => acc + cur, 0));
        static void iter(int[] array) => array.ToList().ForEach(x => Console.WriteLine(x));
        static int FindMax(int[] array) => array.Max();
        static int FindMin(int[] array) => array.Min();
        static int Average(int[] array) => array.Sum()/array.Count();
        static int GreaterThanY(int[] array, int y) => array.Where(x => x > y).Count();
        static int[] elimNeg(int[] array) => array.Select(x => x > 0 ? x : 0).ToArray();
        static int[] shift(int[] array) => array.Skip(1).ToList().Add(0).ToArray()
        static string[] numberToString(int[] array) => array.Select(x => x > 0 ? x.ToString() : 'Dojo').ToArray();





        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            print_1_255();
            print_odd_1_255();
        }
    }
}
