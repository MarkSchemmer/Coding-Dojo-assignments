// double

/*
    doubleUp() every element in array in an order way  [a,b,c] -> [a,a,b,b,c,c]

    removeDupes() recieve an set and return all elements but distinct [a,a,a,a,a,b,b,b,c,c] -> [a,b,c]
*/

/* for future personal documentation!


    Object.values(obj) -> should return an [array of values], issue is that
    it's not supported in many browsers

    the work around is ...

    Object.keys(obj).map(x => obj[x]) -> 
    which returns the {Tkey:Tvalue} it returns the Tvalue part of the object!

    .hasOwnProperty() checks the {} dictionary or object for the that property!


*/

var ar = [0,1]
function fibonacci(stop, ar){
    if(stop < 1) return ar
    var val = ar[ar.length-1] + ar[ar.length-2]
    ar.push(val)
    return fibonacci(stop-1, ar)
}


Array.prototype.doubleUp = function(){ 
   return this.map(x => [x,x] ).reduce((c,i) => c.concat(i),[])
}

Array.prototype.removeDupes = function(){
    var dic = {}
    this.forEach(x => {
        if(!dic.hasOwnProperty(x))
            dic[x+''] = x 
    })
    return Object.keys(dic).map(x => dic[x])
}

methods.doubleUp = doubleUp
methods.removeDupes = removeDupes
module.exports = methods