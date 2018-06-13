// fibonacci

/*
        0 1 1 2 3 5 8 13 21 

*/

var fib = function(end){
    if(end <= 1) return 1 
    if(end <= 2) return 1
    return fib(end-1) + fib(end-2)
}

var test = fib(22)

console.log(test)