/*
    How to get the keys and values of a JSON object
    without using the Object.values() syntax....
*/
var obj = {
    myname:'1',
    jed:'2',
    masin:'3'
}

var ar = Object.keys(obj)

// vals throws an error!
var vals = Object.values(obj)

function getValues(obj){
    return Object.keys(obj).map(x => obj[x])
}

var getValuesLambda = (obj) => Object.keys(obj).map(x => obj[x])