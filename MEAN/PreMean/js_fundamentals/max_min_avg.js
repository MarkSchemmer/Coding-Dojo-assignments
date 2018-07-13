/*

Write a function that takes an array of numbers as a parameter. 
Find the maximum number, the minimum number, and the average of 
all the numbers in the array. Return these values in a nicely formatted string.

Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."
*/


var maxMinAvg = function(arr){
    return {
        'min':Math.min(...arr),
        'max':Math.max(...arr),
        'avg':arr.reduce((acc,cur) => acc + cur, 0)
    }
}