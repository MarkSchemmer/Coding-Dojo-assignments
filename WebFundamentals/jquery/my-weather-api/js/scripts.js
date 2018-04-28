

var toFarenheight = (temp) => Math.trunc(temp*(9/5)-459.67)

function makeHtml(city){
    var str = ''
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+
    ',us&&appid=(API-KEY-HERE)',function(res){
        str += '<h1>'+res.name+'</h1>'+
                '<h3> Tempature: '+toFarenheight(res.main.temp)+'</h3>'
        $('.info').html(str).css({
            'padding':'20px',
            'font-weight':'bolder',
            'font-family':'Arial'
        })
    })
}

const c = (v) => console.log(v)

$(document).ready(function(){
    $('#weather').submit(function(){
       makeHtml($('#city').val())
        return false
    })
})
