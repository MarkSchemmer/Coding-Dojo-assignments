/*
Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93) returns -1 and should only take about 4 iterations.

Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)returns 5.

BONUS: What is the Big O time complexity of binary search?

BONUS: If you solved this problem with recursion (if your function is calling itself), solve it without recursion. Otherwise, solve it again with recursion.
*/

var search = function(arr,item){
    var middle = Math.floor(arr.length/2)
    var val = arr[middle]
    if(arr.length==1){
        if(arr[0] == item){
            return arr[0]
        }else{
            return -1
        }
    }
    if(item == val){
        return val
    }else{
        if(val > item){
           return  search(arr.slice(0, middle), item)
        }else{
           return  search(arr.slice(middle, arr.length), item)
        }
    }
}

var binarySearch = function(arr, item){
    var isThere = search(arr, item)
    return isThere
}

var test = binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93)
console.log(test)

var test2 = binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)
console.log(test2)