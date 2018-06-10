using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {


        public static void display(Artist artist) => System.Console.WriteLine( $"Name: {artist.RealName}   Age: {artist.Age}" ); 

        public static void display(IEnumerable<Artist> iter)
        {
            foreach(var item in iter)
            {
                display(item);
            }
        }

        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================
   
            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            var mountVernon = Artists.FirstOrDefault(x => x.Hometown == "Mount Vernon");
            //display(mountVernon);

            //Who is the youngest artist in our collection of artists?

            var youngest = Artists.OrderBy(x => x.Age).FirstOrDefault();
            //display(youngest);
            //Display all artists with 'William' somewhere in their real name
            var will = Artists.Where(x => x.RealName.ToLower().Contains("william"));
            //display(will);
            //Display the 3 oldest artist from Atlanta
            var atlanta = Artists.Where(x => x.Hometown == "Atlanta").OrderByDescending(x => x.Age).Take(3);
            //(Optional) Display the Group Name of all groups that have members that are not from New York City
           // var NotFromNY = Groups.Where(x => x.Members.Any(y => y.Hometown.Contains("New York"))).Select(x => x.GroupName);
            // foreach(var item in NotFromNY)
            // {
            //     System.Console.WriteLine(item);
            // }
            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
            var wu = Groups.Where(x => x.GroupName == "Wu-Tang Clan").FirstOrDefault();
            foreach(var item in wu.Members)
            {
                System.Console.WriteLine(item.RealName);
            }
        }
    }
}
