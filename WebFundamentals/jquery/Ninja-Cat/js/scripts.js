var cats = ['cat0.png','cat1.png','cat2.png','cat3.png','cat4.png']
var ninjas = ['ninja0.png','ninja1.png','ninja2.png','ninja3.png','ninja4.png']

$(document).ready(function(){
    $('<div class="cont"></div>').appendTo('body')
    $.each(cats, function(index,value){
        $('<img src="../img/'+value+'" alt-src="../img/'+ninjas[index]+'" >').appendTo('.cont').css({
            'display':'block',
            'margin-bottom':'10px',
        })
    })

    $('img').click(function(){
        var cur = $(this).attr('src')
        var alt = $(this).attr('alt-src')
    $(this).fadeOut('fast', function(){
        $(this).attr('src', alt)
        $(this).attr('alt-src',cur).fadeIn('slow')
    })

    })
})