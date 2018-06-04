using System;
using System.Collections.Generic;
using System.Linq;

namespace wiz_sam_ninja
{
    public class Human
{
    public string name;
    //The { get; set; } format creates accessor methods for the field specified
    //This is done to allow flexibility
    public int health { get; set; }
    public int strength { get; set; }
    public int intelligence { get; set; }
    public int dexterity { get; set; }



    public Human(string person)
    {
        name = person;
        strength = 3;
        intelligence = 3;
        dexterity = 3;
        health = 100;
    }
    public Human(string person, int str, int intel, int dex, int hp)
    {
        name = person;
        strength = str;
        intelligence = intel;
        dexterity = dex;
        health = hp;
    }
    public void attack(object obj)
    {
        Human enemy = obj as Human;
        if(enemy == null)
        {
            Console.WriteLine("Failed Attack");
        }
        else
        {
            enemy.health -= strength * 5;
        }
    }
}

 public class Wizard:Human
 {

     private static Random rnd = new Random();

     public Wizard(string person):base(person)
     {
         this.health = 50;
         this.intelligence = 25;
     }
     public Wizard(string person, int str, int intel, int dex, int hp):base(person, str, intel, dex, hp){}

     public void heal()
     {
         this.health += 10*this.intelligence;
     }

    public void fireall(object obj)
    {
        Human enemy = obj as Human;
        if(enemy == null)
        {
            Console.WriteLine("Failed Attack");
        }
        else
        {
            enemy.health -= strength * rnd.Next(20,51);
        }
    }

 }

 public class Ninja:Human
 {
     public Ninja(string person):base(person)
     {
         this.dexterity = 175;
     }

     public void steal(object obj)
     {
         Human enemy = obj as Human;
         if(enemy == null){
            System.Console.WriteLine("Failed Attack");
         }else{
             base.attack(obj);
             this.health += 10;
         }
     }

     public void getAway()
     {
         this.health -= 15;
     } 
 }

 public class Samurai:Human
 {

     private static List<WeakReference> instances = new List<WeakReference>();
     public Samurai(string person):base(person)
     {
         this.health = 200;
         instances.Add(new WeakReference(this));
     }

     public void deathBlow(object obj)
     {
         Human enemy = obj as Human;
         if(enemy == null){
             System.Console.WriteLine("Failed Attack");
         } else if(enemy.health < 50){
             enemy.health = 0;
         }else{
             base.attack(obj);
         }
     }

     public void mediate()
     {
         this.health = 200;
     }

     public static int HowManySamurai()
     {
         List<Samurai> realInstances = new List<Samurai>();
         List<WeakReference> toDelete = new List<WeakReference>();

         foreach(WeakReference reference in instances)
         {
             if(reference.IsAlive)
             {
                 realInstances.Add((Samurai)reference.Target);
             }
             else
             {
                 toDelete.Add(reference);
             }
         }

         foreach(WeakReference reference in toDelete) instances.Remove(reference);

         return realInstances.Count;

     }
 }

}