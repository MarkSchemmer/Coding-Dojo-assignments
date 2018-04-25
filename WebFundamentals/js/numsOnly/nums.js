
var c = (v) => console.log(v)

Array.prototype.numsOnly = function(){
    return this.filter(x => typeof x  === 'number')
}


c([1,2,'mark','four','shawn',{name:'mark'}].numsOnly())