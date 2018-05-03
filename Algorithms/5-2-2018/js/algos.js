

var methods = {}


var unZip = function(obj){
    return [
        Object.keys(obj),
        Object.keys(obj).map(x => obj[x])
    ]
}

var countChars = function(str){
    return str.split('').reduce((acc,item) => {
        if(!acc.hasOwnProperty(item))
            acc[item] = 1
        else
            acc[item] += 1
        return acc 
    },{})
}

methods.unZip = unZip
methods.countChars = countChars

module.exports = methods 