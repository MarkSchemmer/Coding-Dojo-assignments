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

let card = function(suit,cardFace,value,ImgPath){
    this.suit = suit
    this.cardFace = cardFace
    this.value = value
    this.ImgPath = ImgPath
    this.displayName = () => console.log( this.cardFace + ' of ' + this.suit + ' ImagePath: ' + ImgPath )
}
// set = new Set(), [...set]
/*  */
let Deck = function(){

    let makeDeck = function(){
        return  suits.map(x => {
             var suit = Object.keys(values).map(y => new card(x, y, values[y], '../images/'+x+y+'.png'))
             return suit 
         }).reduce((acc, cur) => acc.concat(cur), [])
     }

    this.deck = makeDeck()

    let reset = this.deck
    


    this.shuffle = function(){
        let set = new Set()
        while(set.size<52)
            set.add(this.deck[Math.floor(Math.random()*52)])
        this.deck = [...set]
    }
}


let Player = function(name){
    this.name = name
    this.pairs = 0
    let hand = []
    this.draw = function(card){
        if(hand.length<3){
            hand.push(card)
        }else {
            console.log('cannot ')
        }
    } 
}

let d = new Deck()
d.deck.forEach(x => console.log(x.cardFace + ' of ' + x.suit))
d.shuffle()
console.log('\n\n\n\n')
//d.deck.forEach(x => console.log(x.cardFace + ' of ' + x.suit))
d.deck.forEach(x => x.displayName())
