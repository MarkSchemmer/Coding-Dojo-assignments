


var person = function(name){
    this.name = name 
    this.north = null
    this.south = null 
    this.east = null
    this.west = null 
}

var tiger = new person('tiger')
var piglet = new person('piglet')
var pooh = new person('winnie the pooh')
var bees = new person('bees')
var owl = new person('owl')
var christopher = new person('christopher robin')
var rabbit = new person('rabbit')
var gopher = new person('gopher')
var kanga = new person('Kanga')
var eeyore = new person('eeyore')
var heffalumps = new person('heffalumpps')









tiger.north = pooh
pooh.south = tiger


pooh.west = piglet
pooh.east = bees
pooh.north = christopher

piglet.east = pooh
piglet.north = owl


owl.south = piglet
owl.east = christopher


bees.west = pooh
bees.north = rabbit


christopher.west = owl
christopher.east = rabbit
christopher.north = kanga
christopher.south = pooh

rabbit.west = christopher
rabbit.east = gopher
rabbit.south = bees

gopher.west = rabbit

kanga.south = christopher
kanga.north = eeyore

eeyore.south = kanga
eeyore.east = heffalumps


heffalumps.west = eeyore



var player = function(){
    this.location = tiger

    this.currentLocation = function(){
        var str = "You are now at " + this.location.name + ' house'
        console.log(str)
    }

    this.move = function(to){
        if(to=='north'){
            if(this.location.north!=null){
                this.location = this.location.north
            }
        } else if(to=='south'){
            if(this.location.south!=null){
                this.location = this.location.south
            }
        } else if(to=='east'){
            if(this.location.east!=null){
                this.location = this.location.east
            }
        } else if(to=='west'){
            if(this.location.west!=null){
                this.location = this.location.west
            }
        }
        this.currentLocation()
    }
}


