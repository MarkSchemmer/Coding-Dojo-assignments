


$(document).ready(function(){
    console.log('I"mtire')
    $('<div class"cont"></div>').appendTo('body')
        var url = 'https://pokeapi.co/api/v2/pokemon/'+1+'/'
        var image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        $('<img src="">').attr('src','http://pokeapi.co/media/img/1.png').appendTo('.cont')
})