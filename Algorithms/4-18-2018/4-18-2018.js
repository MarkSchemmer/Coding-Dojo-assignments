
var c = (val) => console.log(val) 
var ar = [...Array(10).keys()]

Array.prototype.popFront = function(){
    this.splice(0,1)
    return this 
}

Array.prototype.pushFront = function(val){
    var newArray = [val].concat(this)
    return newArray
}

Array.prototype.RemoveAt = function(idx){
    this.splice(idx,1)
    return this 
}

Array.prototype.insertAt = function(idx,val){
    this.splice(idx,0,val)
    return this 
}

