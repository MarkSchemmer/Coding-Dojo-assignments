
var methods = {}


var revArray =   function(arr){
    var a = []
    for(var i = arr.length-1; i >= 0; i--)
        a.push(arr[i])
    return a
}


 var revStr = function(arr){
    var a = ''
    for(var i = arr.length-1; i >= 0; i--)
        a += arr[i]
    return a 
}


 var splitString = function(str,sep){
    var s = []
    for(var i =0; i < str.length; i++)
        if(str[i] == sep)
            s.push('')
        else 
            s.push(str[i])
    return s.filter(x => x != '')
}

methods.revArray = revArray
methods.revStr = revStr
methods.splitString = splitString


module.exports = methods



