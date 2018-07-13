// How to remember what was chosen in a recursive call... I will use a list


/*
    I use .splice(index, how many to delete)

*/


// String.prototype.replaceAt=function(idx, rep) {
//     return this.substr(0, idx) + rep + this.substr(idx + rep.length)
// }

String.prototype.replaceAt = function(idx){
    var arr = [...this]
    arr.splice(idx,1)
    return arr.join('')    
}

String.prototype.insert = function(idx,item){
    var arr = [...this]
    arr.splice(idx,0,item)
    return arr.join('')
}

// helper
var permute = function(s, chosen, set){
    if(s.length < 1 || s == null){
        set.add(chosen)
    }else{
        for(var i = 0; i < s.length; i++){
             // choose (1 letter)
            var char = s[i]
            s = s.replaceAt(i)
            chosen+= char
            // explore
            permute(s,chosen,set)
            // unchoose
            s = s.insert(i, char)
            chosen = chosen.replaceAt(chosen.length-1)
        }
    }
}

// starter...
var permutations = function(s){
    var set = new Set()
    permute(s, '', set)
    return set 
}

permutations('google')