const util = require('util')

function timeString(hour, minute, period){
    var nextHour = hour==12?1:hour+1
    return util.format("It's {0} in the {1}",
                       minute<30?"just after "+hour:"almost "+nextHour, period=="AM"?"morning":"evening")
    
}

