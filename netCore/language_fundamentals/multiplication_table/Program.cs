using System;
using System.Linq;
namespace multiplication_table
{
    class Program
    {

        static int[][] multTable()
        {
            return Enumerable.Range(1,10).Select(x => {
                return Enumerable.Range(1,10).Select(z => z*x).ToArray();
            }).ToArray();
        }


        static void Main(string[] args)
        {
            foreach (var item in multTable())
            {
                Console.WriteLine("[{0}]", String.Join(", ", item));
            }
            Console.WriteLine("Hello World!");
        }
    }
}
