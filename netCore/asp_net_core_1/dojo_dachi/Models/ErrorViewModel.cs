using System;

namespace dojo_dachi.Models
{



    public class Pet
    {

        public static  Random rnd = new Random();
        public int happiness {get; set;}
        public int fullness {get; set;}

        public int energy {get; set;}

        public int meals {get; set;}


        public Pet(){
            this.happiness = 20;
            this.fullness = 20;
            this.energy = 50;
            this.meals = 3;
        }


        public int r(int start, int end) => rnd.Next(start, end); 

        public bool wontLike() => rnd.Next(0,4) == 1 ? false : true;

        public void feed()
        {
            this.meals = this.meals-1;
            if(wontLike()){
                this.fullness = this.fullness+r(5,11);
            }
     

        }

        public void play()
        {
            this.energy = this.energy-5;
            if(wontLike()){
                this.happiness = this.happiness+r(5,11);
            }
        }

        public void work()
        {
            this.energy = this.energy-5;
            this.meals+=r(1,4);
        }

        public void sleep()
        {
            this.energy += 15;
            this.fullness-=5;
            this.happiness-=5;
        }

        public bool win()
        {
            if(this.fullness >= 100 && this.happiness >= 100 && this.energy >= 100){
                    return true;
            }else{
                return false;
            }
        }

        public bool lose()
        {
            if(this.fullness <= 0 || this.happiness <= 0){
                return true;
            }else{
                return false;
            }
        }





    }


    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}