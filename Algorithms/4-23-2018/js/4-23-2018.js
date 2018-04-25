
var methods = {}

var c = (val) => console.log(val)

var printKeys = function(obj){
    Object.keys(obj).forEach(c)
}

var printValues = function(obj){
    Object.keys(obj).map(x => obj[x]).forEach(c)
}

var UnZip = function(obj){
    var keys = Object.keys(obj)
    return [keys, keys.map(x => obj[x])]
}


var lets = ['a','b','c'], nums = [1,2,3]

var zip  = function(ar1,ar2){
   return  ar1.reduce((c,e,idx) => {
        c[e] = ar2[idx]
        return c
    },{})
}

methods.UnZip = UnZip
methods.zip = zip 

module.exports = methods 