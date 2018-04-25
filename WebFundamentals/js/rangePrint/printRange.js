
var c = (v) => console.log(v)
var printRange = function (start=0, end, skip=1){ 
    if(end == undefined){
        var temp = start 
        end = start 
        start = 0 
    }
    for(var i = start; i < end; i+=Math.abs(skip)) c(i)
 }

printRange(2,10,2)
printRange(-5,5,3)
printRange(4,8)
printRange(8)
