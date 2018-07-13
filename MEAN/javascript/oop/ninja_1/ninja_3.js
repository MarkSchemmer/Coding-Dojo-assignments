class Ninja {
    


    constructor(name, health=100, speed=3,strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        let stats = 'Name: ' + this.name + ' Health: ' + this.health + ' Speed: ' + speed + ' Strength: ' + strength
        console.log(stats)
    }

    drinkSake(){
        this.health += 10
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10)
    }


}

let shifu = new Sensei('shifu')
console.log(shifu)