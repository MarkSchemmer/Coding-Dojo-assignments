const c = (v) => console.log(v)
var makePoke = (id) => '<img id="'+id+'" src="https://pokeapi.co/media/img/'+id+'.png">'

var makeStaticPokemon  = () => [...Array(152).keys()].slice(1)
                               .reduce((c,i) => c + makePoke(i) ,'')

$(document).ready(function(){

    $('.images').css({
        'width':'750px'
    })

    $('img').css({
        'width':'50px',
        'height':'50px',
    })

    $('.images').html(makeStaticPokemon()).css({
        'display':'inline-block',    
    })
})


$(document).on('click','img',function(){
    var str = ''
    var id = $(this).attr('id')
    $.get('http://pokeapi.co/api/v2/pokemon/'+id+'/',function(res){
        c(res)
         str += '<h1>'+res.name+'</h1>'
         str += makePoke(id)
         str += '<h1>Types</h1><ul>'
        $.each(res.types,function(index,value){
            str += '<li>'+value.type.name+'</li>'
        })

        str += '</ul><h1>Height</h1><p>'+res.height+'</p>'+
        '<h1>Weight</h1><p>'+res.weight+'</p>'

        $('.info').html(str)
    })
})