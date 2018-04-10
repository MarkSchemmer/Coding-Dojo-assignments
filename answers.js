

var c = (val) => console.log(val)

// Don't Worry, Be Happy
function beHappy(){
    function beCheerful(){
        console.log('good morning!')
    }

    for (let index = 0; index < 98; index++) {
        beCheerful()
    }
}



// Multiples of Three - but Not All
function multiOfThree(){
var divisBy = (integer, divsor) => integer % divsor == 0 

for(var i = -300; i < 0; i++ ){
    if(i == -3 || i == -6) continue 
    if(divisBy(i,3)) console.log(i)
}
}




// Printing Integers with While
function printIntWhile(){
var i = 2000
while(i < 5280){
    console.log(i)
    i++
}
}

// You Say It's Your Birthday ????


// Leap Year

function leapYear(year){
 if(year%4==0 && year%100 != 0)
    return true
 else if(year % 400 == 0)
    return true 
else 
    return false 
}




// Print and Count


 function printCount(){
     var counter = 0
     for(var i = 512; i <= 4096; i++){
         if(i % 5 == 0){
                console.log(i)
                counter++
         }
     }

     return counter
 }


 // Multiples of six
 function multiOfSix(){
var counter = 6
 while(counter<=60000){
    if(counter%6 == 0)
        c(counter)
    counter++
 }
}


// Counting the dojo way

function countDojo(){
     [...Array(101).keys()].filter(x => x > 0)
                                 .map(x => {
                                     if(x%5==0&&x%10==0)
                                         x = 'Coding Dojo'
                                     if(x%10==0)
                                         x = 'Dojo'
                                     if(x%5==0)
                                         x = 'Coding'
                                    return x 

                                 }).forEach(x => c(x))
}


// incomeing
var incomeing = (val) => c(val)
// Whoa that sucker is huge
/*
    I'm assuming a couple of things

        1: should I use absolute values of negative numbers when adding the negative values together?

        because if that was not what your asking then what is the point of the problem?

        -1 + 1 = 0 should I just return 0?

        I think not!

        so... I will just iterate through 0 to 300,000 and double it

        or I could just use the Math.abs() but there is no need for that I think

*/
function hugeThing(){
    var odd = (val) => val%2 != 0
    return [...Array(300,001).keys()].filter(odd)
                                     .reduce((cur,val) => cur + val ,0)
                                     *2
}

// CountDown by fours
// logs and returns in correct format!
function countFour(){
     [...Array(2017).keys()].reverse()
                            .filter(x => x%4== 0)
                            .forEach(x => c(x))
}

function flexCount(lowNum,highNum,mult){
     [...Array(highNum).keys()].reverse()
                               .filter(x => x%mult==0)
                               .forEach(x => c(x))
}



function finalCount(p1, p2, p3, p4){
    var mutlOfp1 = v => v%p1==0&&v%p4!=0;
    [...Array(p3).keys()].filter(x => x > p2-1 && mutlOfp1(x)).forEach(c)
}











