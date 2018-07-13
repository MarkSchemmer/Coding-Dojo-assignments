const suits = ['h', 'd', 'c', 's']
const values = {
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'j':11,
    'q':11,
    'k':11,
    'a':1
}

let card = function(suit,cardFace,value){
    this.suit = suit
    this.cardFace = cardFace
    this.value = value
    this.displayName = () => console.log( this.cardFace + ' of ' + this.suit )
}

let Deck = function(){

    this.deck = makeDeck()

    let reset = this.deck
    
    let makeDeck = function(){
       return  suits.map(x => {
            var suit = Object.keys(values).map(y => new card(x, y, values[y]))
            return suit 
        }).reduce((acc, cur) => acc.concat(cur), [])
    }

    this.shuffle = function(){
        let set = new Set()
        while(set.size<52)
            set.add(this.deck[Math.floor(Math.random()*52)])
        this.deck = [...set]
    }
}


let Player = function(name){
    this.name = name
    let hand = []
    this.draw = function(card){
        if(hand.length<3){
            hand.push(card)
        }else {
            console.log('cannot ')
        }
    } 
}

var d = new Deck()
d.deck.forEach(x => console.log(x.cardFace + ' of ' + x.suit))
d.shuffle()
console.log('\n\n\n\n')
//d.deck.forEach(x => console.log(x.cardFace + ' of ' + x.suit))
d.deck.forEach(x => x.displayName())
