using System;

namespace doulbeLinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = new LinkedList<int>();
            list.Add(1).Add(3).Add(5).Add(7).RemoveFront().RemoveBack().iter();
            bool x = list.Contains(5, out int test);
            if(x){
                System.Console.WriteLine("Yeah it works!");
                System.Console.WriteLine(test);
            }
            Console.WriteLine("Hello World!");
        }
    }
}
