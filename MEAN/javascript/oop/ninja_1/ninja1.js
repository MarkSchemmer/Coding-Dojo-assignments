let ninja = function(name){
    this.name = name 
    this.health = 100 
    let speed = 3, strength = 3
    this.sayName = function(){
        console.log(this.name)
    }
    this.showStats = function(){
        let stats = 'Name: ' + this.name + ' Health: ' + this.health + ' Speed: ' + speed + ' Strength: ' + strength
        console.log(stats)
    }
    this.drinkSake = function(){
        this.health += 10
        console.log(this.health)
    }

    this.punch = function(other){
        if(other instanceof ninja)
            other.health -= 5
        else 
            console.log('can only attack a ninja')
    }
    this.kick = function(other){
        if(other instanceof ninja)
            other.health -= 15
        else 
            console.log('can only attack a ninja')
    }
    
}