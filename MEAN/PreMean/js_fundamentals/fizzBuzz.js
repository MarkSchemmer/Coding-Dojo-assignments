/* create a fizz buzz function*/
var fizzBuzz=(to)=>[...Array(to).keys()].slice(1).map(x =>x%15==0?'FizzBuzz':x%5==0?'Buzz':x%3==0?'Fizz':x)