/*

    

*/
const c = (obj) => console.log(obj)

var sigma = function(n){
    if(n == 1)
        return n 
    return n + sigma(n-1)
}


var factorial = function(n){
    if(n == 1)
        return n 
    return n * factorial(n-1)
}


c(sigma(5))

c(factorial(5))