
var methods = {}

var isPalindrone = function(s){
    return s === s.split('').reverse().reduce((c,i) => c + i,"")
}

var panagram = function(str){
    var regex = /\s+/g
    const s = str.replace(regex,'').toLowerCase()
    var obj = {}
    var data = [...Array(26).keys()].map(x => String.fromCharCode(97+x)).reduce((c,i) =>{
            c[i] = false 
            return c 
    },{})
    
    for (const key in s) {
        if (data.hasOwnProperty(s[key])) {
            data[s[key]] = true 
        }
    }
    return Object.keys(data).map(x => data[x]).some(x => x == false) ? false : true
}


methods.isPalindrone = isPalindrone
methods.panagram = panagram
module.exports = methods