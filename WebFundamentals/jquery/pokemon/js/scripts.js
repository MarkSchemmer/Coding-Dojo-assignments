
var makePoke = (id) => '<img src="https://pokeapi.co/media/img/'+id+'.png">'

var makeStaticPokemon  = () => [...Array(152).keys()].slice(1)
                               .reduce((c,i) => c + makePoke(i) ,'')
$(document).ready(function(){
    $('.images').html(makeStaticPokemon()).css({
        'display':'inline-block',    
    })
})