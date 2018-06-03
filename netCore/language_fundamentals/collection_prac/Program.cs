using System;
using System.Linq;
using System.Collections.Generic;

namespace collection_prac
{
    class Program
    {


        static rnd = new Random();

        static void basicArray(){
            var ar1 = Enumerable.Range(1,9).ToArray();
            var ar2 = new String[] { "Tim", "Martin", "Nikki", "Sara"};
            var ar3 = Enumerable.Range(0,10).Select(x => x%2==0 ? true : false ).ToArray();
        }


        static void listFlavors(){
            var flavors = new List<string> { "choc", "straw", "blue", "purple", "pink"};
            var lengthFlavors = flavors.Count;
            var thirdValue = flavors[2];
            flavors.RemoveAt(2);
            var newLength = flavors.Count;
        }

        static void dictionary(){
            var names = new List<string> {"mark", "ruth", "james", "Ze", "jones"};
            var flavors = new List<string> { "choc", "straw", "blue", "purple", "pink"};
            var dic = new Dictionary<string,string>();
            names.foreach(x => dic.add(x, flavors[rnd.Next(1,flavors.Count-1)]));
            dic.foreach(x => System.Console.WriteLine(String.Format("{0} {1}", x.key, x.value)));
        }



        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
