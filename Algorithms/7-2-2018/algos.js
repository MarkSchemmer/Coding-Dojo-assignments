// bubble sort 
var bubbleSort = function(arr){
    let runner = true 
    while(runner){
        runner = false 
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                runner = true 
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp 
            }
        }
    }
    return arr 
}

let arr = [...Array(40).keys()].map( x => Math.floor((Math.random()*100)) )
let test = bubbleSort(arr)
console.log(test)

// selection sort
let selectHelper = function(init,acc){
    for(let i = 0; i < init.length; i++){
        let minIndex = i
        for(let j = i+1; j < init.length; j++){
            if(init[minIndex] > init[j]){
                minIndex = j
            }
        }
        acc.push(init[minIndex])
        init.splice(minIndex,1)
        selectHelper(init, acc)
    }
    return acc 
}

Array.prototype.selectionSort = function(){
    var arr = this 
    return selectHelper(arr, [])
}

let arr2 = [...Array(10).keys()].map(x => Math.floor(Math.random()*100))
let sortArr2 = arr2.selectionSort()
console.log(sortArr2)


// Insertion sort 
Array.prototype.insertionSort = function(){
    let arr = this 
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
        let runner = true 
        while(runner){
            for(var j = i; j >= 0; j--){
                if(arr[j] < arr[j-1]){
                    runner = true
                    var temp = arr[j]
                    arr[j] = arr[j-1]
                    arr[j-1] = temp
                }else{
                    runner = false 
                }
            }
        }
    }
    return arr
}

let arr3 = [...Array(10).keys()].map(x => Math.floor(Math.random()*100)).insertionSort()
console.log(arr3)