var penny = 0.01, 
    maxDays = 30, 
    billion = 1000000000, 
    c = (v) => console.log(v)

function servant(maxDays, penny){
    if(maxDays < 1){
        c(penny)
        return penny 
    }
    return servant(maxDays-1,penny*2)
}

function hitBillion(penny,dayCount){
    if(penny >= billion){
        c(dayCount)
        return dayCount
    }
    
    return hitBillion(penny*2, dayCount+1)
}

hitBillion(penny,0)
/*
    after 10 days will hit 10,000

    after 37 days you will hit a billion

*/

servant(maxDays, penny)