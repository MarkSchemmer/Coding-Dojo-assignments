
var daysUntilBday = 60
var c = (v) => console.log(v)
var sadMes = " Such a long time",
    happyMes = " My Birthday is approaching!",
    standardMes = " days unit my birthday",
    scream = " DAYS UNTIL MY BIRTHDAY"

function whileYouWait(d){
    d = d - 1 
    if(d>30){
        c(d+standardMes+sadMes)
        return whileYouWait(d)
    }
    else if(d <= 30 && d > 5){
        c(d+standardMes+happyMes)
        return whileYouWait(d)
    }
    else if(d <= 5 && d > 1){
        c(d+scream)
        return whileYouWait(d)
    }
    else if(d == 1){
        c(d + "DAY UNTIL MY BIRTHDAY!")
        return whileYouWait(d)
    }
    else{
        c('Happy Birthday!!!!')
    }
}
whileYouWait(17)