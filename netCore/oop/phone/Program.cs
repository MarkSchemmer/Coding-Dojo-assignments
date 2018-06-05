using System;

namespace phone
{


            public abstract class Phone 
            {
                private string _versionNumber;

                public string versionNumber
                {
                    get 
                    {
                        return _versionNumber;
                    }
                }
                private int _batteryPercentage;

                public int batteryPercentage
                {
                    get 
                    {
                        return _batteryPercentage;
                    }
                }
                private string _carrier;

                public string carrier
                {
                    get 
                    {
                        return _carrier;
                    }
                }
                private string _ringTone;

                public string ringTone
                {
                    get 
                    {
                        return _ringTone;
                    }
                }
                public Phone(string versionNumber, int batteryPercentage, string carrier, string ringTone){
                    _versionNumber = versionNumber;
                    _batteryPercentage = batteryPercentage;
                    _carrier = carrier;
                    _ringTone = ringTone;
                }
                // abstract method. This method will be implemented by the subclasses
                public abstract void DisplayInfo();
                // public getters and setters removed for brevity. Please implement them yourself
            }

            interface IRingable 
            {
                // your code here
                string Ring();
                 string Unlock();
            }


            public class Nokia : Phone, IRingable 
            {
                public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
                   : base(versionNumber, batteryPercentage, carrier, ringTone) {}
                    public string Ring() 
                    {
                        // your code here
                        return this.ringTone;
                    }
                    public string Unlock() 
                    {
                        // your code here
                        return $"Nokia {versionNumber} unlocked with passcode";
                    }
                    public override void DisplayInfo() 
                    {
                        string str = String.Format(
                        @"
                        Nokia {0}
                        Battery Percentage: {1}
                        Carrier: {2}
                        Ring Tone: {3}
                        ", versionNumber, batteryPercentage, carrier, ringTone);
                        System.Console.WriteLine(str);  
                    }
            }


            public class Galaxy : Phone, IRingable 
            {
                public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
                    : base(versionNumber, batteryPercentage, carrier, ringTone) {}
                public string Ring() 
                {
                    // your code here
                    return this.ringTone;
                }
                
                public string Unlock() 
                {
                    // your code here
                    return $"Galaxy {versionNumber} unlocked with finger scan";
                }
                public override void DisplayInfo() 
                {
                    string str = String.Format(
                    @"
                    Galaxy {0}
                    Battery Percentage: {1}
                    Carrier: {2}
                    Ring Tone: {3}
                    ", versionNumber, batteryPercentage, carrier, ringTone);
                    System.Console.WriteLine(str);      
                }
}
        
        
        



    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Hello World!");
            Galaxy s8 = new Galaxy("s8", 100, "T-mobile", "Doo do doo dooo");
            Nokia elevenHundred = new Nokia("1100", 60, "Metro PCS", "Ringg ring ringgggg");

            s8.DisplayInfo();
            System.Console.WriteLine(s8.Ring());
            System.Console.WriteLine(s8.Unlock());
            System.Console.WriteLine("-------------------------------------------");

            elevenHundred.DisplayInfo();
            System.Console.WriteLine(elevenHundred.Ring());
            System.Console.WriteLine(elevenHundred.Unlock());
            System.Console.WriteLine("-----------------------------------------------");
        }
    }
}
