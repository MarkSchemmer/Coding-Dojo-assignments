
var methods = {}
var keys = (obj) => Object.keys(obj)

var values = (obj) => Object.keys(obj).map(x => obj[x])

var zipArrays = function(ar1, ar2){
    return ar1.reduce((acc,item,idx) => {
        acc[item] = ar2[idx]
    },{})
}


var isPalindron = (str) => str.toLowerCase()===str.toLowerCase().split('').reverse().reduce((acc,item) => acc + item , '')


methods.keys = keys
methods.values = values
methods.zipArrays = zipArrays
methods.isPalindron = isPalindron

module.exports = methods