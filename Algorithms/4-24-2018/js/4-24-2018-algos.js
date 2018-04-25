var methods = {}


/* Chris's technique for solving the reverse array


    this solution is elegant and good because it 
    instead of O(n) I think its O(n/2) or basically
    the it only loops through half the array 
    and saves many interations 
    
    for small operations I think it's pointless 
    but for huge data sets maybe it would 
    be helpful 

    var len = arr.length-1
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[len-i]
        arr[len-i] = temp  
    }

*/

var revArr = function(arr){
    var ar = []
    for(var i = arr.length-1; i >= 0; i--)
       ar.push(arr[i])
    return ar 
}

var revStr = function(str){
    return str.split('').reverse().join('')
}

var acro = function(str){
    return str.split(' ').map(x => x[0]).join('')
}

methods.revArr = revArr
methods.revStr = revStr
methods.acro = acro

module.exports = methods
