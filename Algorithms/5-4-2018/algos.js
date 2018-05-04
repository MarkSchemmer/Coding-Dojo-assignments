
var methods = {}

let alphabet = [...Array(26).keys()].map(x => String.fromCharCode(97+x))
               .reduce((acc,item,index) => {
                    acc[index+1] = item 
                    return acc 
              },{})
var IsAlphabetical = function(str){
    letters = Object.keys(alphabet).map(x => alphabet[x] ).join('')
    str = str.split('').filter(x => ~letters.indexOf(x))
    for(var i = 1; i < 26; i++)
        if(str[i-1] != alphabet[i])
            return false
    return true 
}


var braces = {
    '{':'}',
    '(':')',
    '[':']',
    '<':'>'
}


// does not work!
// var validBraces = function(str){
//     for(var i = 0, j = 1; j < str.length; i++,j++){
//             if(braces[str[i]] == str[j]){
//                 str[i] = ''
//                 str[j] = ''
//                 return validBraces(str)
//             }
//     }

//     return str.length == 0
// }

const c = (x) => console.log(x)

var validBraces = function(str){
    var pattern = /(\[\])|({})|(\(\))|(<>)/g
    var match = str.match(pattern)
    while(match){
        str = str.replace(pattern, '')
        match = str.match(pattern)
    }
    return str.length == 0
}




methods.IsAlphabetical = IsAlphabetical
methods.validBraces = validBraces

module.exports = methods 