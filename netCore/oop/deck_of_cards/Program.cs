using System;
namespace deck_of_cards
{
    class Program
    {
        static void Main(string[] args)
        {
            var deck = new Deck();
            var mark = new Player("Mark Schemmer", deck);
            var josh = new Player("Josh new guy", deck);

            mark.displayDeck();
            System.Console.WriteLine( "ceck to see if the same ----------------");
            josh.displayDeck();
            mark.draw();
            josh.draw();
            System.Console.WriteLine("cekccccc");
            mark.displayDeck();
            System.Console.WriteLine("-------------------- Hand - --------------------");
            mark.displayHand();
            System.Console.WriteLine("-------------------------------");
            josh.displayDeck();
            System.Console.WriteLine("------- Hand  ---------------------");
            josh.displayHand();
        }
    }
}
