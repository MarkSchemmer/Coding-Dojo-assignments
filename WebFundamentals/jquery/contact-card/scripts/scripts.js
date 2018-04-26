

$(document).ready(function(){
    var c = (v) => console.log(v)

    $('form').children().css({
        'display':'block',
        'margin-bottom':'15px',
    })

    function makeCard(json){
            tableRowClass = json[0].value+json[1].value
            $('<tr>').appendTo('.contacts table')

            json.forEach(element => {
                $('<td>'+element.value+'</td>').appendTo('.contacts table tr')
            })

            $('</tr>').appendTo('.contacts table tr')
    }

    $('#addUser').submit(function(){
        var data = $(this).serializeArray()
        var json = JSON.parse(JSON.stringify(jQuery(this).serializeArray()))
        c(json)
        makeCard(json)
        return false 
    })
})