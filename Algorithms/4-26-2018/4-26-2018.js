
var methods = {}

var sigma = (num) => [...Array(num+1).keys()].reduce((c,i) => c + i,0)

var sigmaRecursion = function(num){
  if(num>0)
    return num+sigmaRecursion(num-1)
  else  
    return num 
}


var fizzBuzz = (to) => [...Array(to+1).keys()].filter((e,i) => i > 0).map(x => {
    if(x%5==0&&x%3==0)
        return "FizzBuzz"
    else if(x%3==0&&x%5!=0)
        return "Fizz"
    else if(x%3!=0 && x%5==0)
        return "Buzz"
    else
        return x
})


var coinMachine = function(num){
    var amount = 0, pennys = 0, nicks = 0, dimes = 0, quarts = 0
    while(amount<= num){

        if(amount+25<= num){
            quarts += 1
            amount+= 25
        }else if(amount+10<=num){
            dimes += 1
            amount += 10
        }else if(amount+5<=num){
            nicks += 1
            amount+=5
        }else if(amount+1<=num){
            pennys+=1
            amount+=1
        }

        if(amount == num){
            break;
        }
    }
    return {
        'pennys':pennys,
        'nickels':nicks,
        'dimes':dimes,
        'quarters':quarts
    }
}


methods.sigma = sigma
methods.sigmaRecursion = sigmaRecursion
methods.fizzBuzz = fizzBuzz
methods.coinMachine = coinMachine


module.exports = methods

/*
            Coin Change machine gives back the most efficinet amount of change

            in pennys nickels and dimes and querters

*/


