// bubble sort 




var bubbleSort = function(arr){
    var runner = true 
    while(runner){
        runner = false 
        for(var i = 0; i < arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                runner = true 
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp 
            }
        }
    }
    return arr 
}

var arr = [...Array(40)].map(x => Math.round(Math.random()*1000))
var sorted = bubbleSort(arr)
console.log(sorted)