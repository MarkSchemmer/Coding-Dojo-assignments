const c = (v) => console.log(v)

const familys = {
    Baratheon:{image:'../img/baratheon.png',
    url:'https://www.anapioficeandfire.com/api/houses?name=House%20Baratheon%20of%20Storm%27s%20End'},
    Lannister:{image:'../img/lannister.jpg', 
    url:'https://www.anapioficeandfire.com/api/houses?name=House%20Lannister%20of%20Casterly%20Rock'},
    Stark:{image:'../img/stark.jpg', 
    url:'https://www.anapioficeandfire.com/api/houses?name=House%20Stark%20of%20Winterfell' },
    Targaryen:{image:'../img/targaryen.jpg', 
    url:'https://www.anapioficeandfire.com/api/houses?name=House%20Targaryen%20of%20King%27s%20Landing'}
}


var displayInfo = function(json){
    json = json[0]
    var str = ''
    
    str += '<h2>'+json.name+'</h2><h2>Words'+
    json.words+'</h2><p>'

    $.each(json.titles, function(index, value){
        str += value + ', '
    })

    str += '</p>'

    $('.info').html(str)

}

var fetchData = function(houseName){
    var house = familys[houseName].url 
        $.get(house,function(res){
                displayInfo(res)
        })
}

$(document).ready(function(){

    $.each(Object.keys(familys), function(index, value){
        $('<img id="'+value+'" src="'+familys[value].image+'">').appendTo('.houses')
    })

    $('img').click(function(){
        var houseName = $(this).attr('id')
        fetchData(houseName)
    })
})