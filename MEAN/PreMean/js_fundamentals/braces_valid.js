var rgx = /([])|({})|(\(\))/

var braceHelper = function(s){
    var match = s.match(rgx)
    if(match){
        s = s.replace(rgx, '')
        braceHelper(s)
    }else{
        return s 
    }
}

var bracesValid = function(s){
    var str = braceHelper(s)
    return str == null 
}

var test = bracesValid('[[[({})]]]')
console.log(test)


var test2 = bracesValid('([[[]]]}')
console.log(test2)