var methods = {}

var fib = function(num,ar=[1,1]){
    if(num<=2){
        return ar[ar.length-1]
    }else{
        ar.push(ar[ar.length-1]+ar[ar.length-2])
        return fib(num-1,ar)
    }
}
/*
    search matrix and change all 
    values of val to newVal 
*/

var changeVals = function(matrix, val, newVal){
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == val){
                    matrix[i][j] = newVal
            }
        }
    }

    return matrix
}

methods.fib = fib
methods.changeVals = changeVals 
module.exports = methods 