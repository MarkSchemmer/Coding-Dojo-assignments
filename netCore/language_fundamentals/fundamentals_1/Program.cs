using System;
using System.Linq;
using System.Collections.Generic;

namespace fundamentals_1
{
    class Program
    {

        static void print_255 () => Enumerable.Range(1,255).ToList().ForEach(x => Console.WriteLine(x)); 

        static List<int> Three_Five() => Enumerable.Range(1,100).Where(x => x%15!=0 && (x%5==0 || x%3==0 ) ).ToList();

        static List<string> fizzBuzz() 
        {
            return Enumerable.Range(1,100).Select(x =>  {

                if(x%15==0){
                    return "FizzBuzz";
                }
                if(x%5==0){
                    return "Buzz";
                }
                if(x%3==0){
                    return "Fizz";
                }
                return x.ToString();

            }).ToList();
        }

        static void Main(string[] args)
        {
            var list = fizzBuzz();
            foreach (var item in list)
            {
                System.Console.WriteLine(item);
            }
        }
    }
}
