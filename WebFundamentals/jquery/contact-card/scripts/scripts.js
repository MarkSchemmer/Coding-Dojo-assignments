

$(document).ready(function(){
    var c = (v) => console.log(v)
    var id = 0
    $('form').children().css({
        'display':'block',
        'margin-bottom':'15px',
    })

    function makeCard(json){
           $('<tr class="'+id+'">').appendTo('.contacts table')

            json.forEach(element => {
               $('.contacts table .'+id).append('<td>'+element.value+'</td>')
            })

            $('.contacts table').append('</tr>')

            id++
    }

    $('#addUser').submit(function(){
        var json = JSON.parse(JSON.stringify(jQuery(this).serializeArray()))
        makeCard(json)
        return false 
    })
})