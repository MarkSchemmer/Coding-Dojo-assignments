class Bike{
    public miles : number; 
    constructor(public price : number, public max_speed : String){
        this.miles = 0
    }

    displayInfo(){
        console.log(`the bikes price ${this.price} 
        the max speed ${this.max_speed} 
        the total miles ${this.miles}`)
        return this 
    }

    ride(){
        console.log('Riding....')
        this.miles += 10
        return this 
    }

    reverse(){
        console.log(' Reversing.......')
        this.miles -= 5
        return this 
    }

}

let bike1 = new Bike(300, '225mph')
let bike2 = new Bike(250, '250mph')
let bike3 = new Bike(350, '450mph')

bike1.ride().ride().ride().displayInfo()


