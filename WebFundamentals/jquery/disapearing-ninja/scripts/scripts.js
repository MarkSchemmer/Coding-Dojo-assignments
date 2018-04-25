
$(document).ready(function(){
    const image = '../img/Berzerk_1.png'
    var howmanyMake = 0

    function genImages(counter){
        while(counter > 0){
            $('.container').append("<img src='../img/Berzerk_1.png'>")
            counter--
        }
    }

    genImages(8)
    $('.button').append("<div><button>RefreshAll</button></div>")

    $('img').click(function(){
        howmanyMake++
        $(this).hide('slow')
    })

    $('.button button').click(function(){
        genImages(howmanyMake)
        howmanyMake=0
    })
})
