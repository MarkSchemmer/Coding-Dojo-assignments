

/* key codes
    37: left
    38:up
    39:right
    40:down

*/



var c = (v) => console.log(v)
var points = 0
var ninja = {
    'x':5,
    'y':5
}

var cellType = {
    wall:0,
    coin:1,
    ninja:2,
    empty:3
}

var press = {
    left:37,
    up:38,
    right:39,
    down:40
}

var images = {
    doge:'',
  //  doge:'<img src="../img/doge.jpg">',
    ninja:'<img src="../img/ninja.jpg">'
}

var produceHtml = (cls,img=undefined) => img == undefined 
? '<div class="'+cls+
'"></div>' : '<div class="'+cls+'">'+img+'</div>'

function getClassOfCoordinate(n){
    switch(n){
        case 0: return 'wall'
        case 1: return 'coin' 
        case 2: return 'ninja'
        case 3: return 'empty'
    }
}

function producingCell(coor){
    var cls = getClassOfCoordinate(coor)

    if(coor == cellType.wall){
       htmlStr += produceHtml(cls)
    }

    if(coor == cellType.coin){
        htmlStr += '<div class="'+cls+'">'+
        images.doge+'</div>'
    }

    if(coor == cellType.ninja){
        htmlStr += '<div class="'+cls+'">'+
        images.ninja+'</div>'
    }

    if(coor == cellType.empty){
        htmlStr += '<div class="'+cls+'"></div>'
    }
}

var world = [
   [0,0,0,0,0,0,0,0,0,0],
   [0,1,1,1,1,1,1,1,1,0],
   [0,1,0,0,1,1,0,0,1,0],
   [0,1,0,0,1,1,0,0,1,0],
   [0,1,1,1,1,1,1,1,1,0],
   [0,1,1,1,1,2,1,1,1,0],
   [0,1,0,1,1,1,0,1,1,0],
   [0,1,0,0,1,1,0,0,1,0],
   [0,1,1,1,1,1,1,1,1,0],
   [0,0,0,0,0,0,0,0,0,0],
]

function drawWorld(){
    var htmlStr = ''



    for(var y = 0; y<world.length; y++){
        for(var x = 0; x<world[y].length; x++){

            var coor = world[y][x]

            var cls = getClassOfCoordinate(coor)

            if(coor == cellType.wall){
               htmlStr += produceHtml(cls)
            }

            if(coor == cellType.coin){
               htmlStr += produceHtml(cls, images.doge)
            }

            if(coor == cellType.ninja){
               htmlStr += produceHtml(cls, images.ninja)
            }

            if(coor == cellType.empty){
                htmlStr += produceHtml(cls)
            }

        }
    }
    $('.map').html(htmlStr)

    $('.score_board')
    .html('<p>Points:</p><p class="points">'+points+'</p>')
    .css({
        'font-weight':'bolder',
        'margin-left':'25px',
        'margin-top':'25px',
        'font-family':'Arial',
        'display':'inline-block'
    })
}

$(document).ready(function(){
    drawWorld()
})

$(document).on('keydown',function(e){
    var key = e.keyCode

    if(key==press.left){
        if(world[ninja.y][ninja.x-1]!=0){
            if(world[ninja.y][ninja.x-1]==1){points+=1}
            world[ninja.y][ninja.x] = 3
            ninja.x-=1
            world[ninja.y][ninja.x] = 2
            drawWorld()
        }
    } 

    if(key==press.up){
        if(world[ninja.y-1][ninja.x]!=0){
            if(world[ninja.y-1][ninja.x]==1){points+=1}
            world[ninja.y][ninja.x] = 3
            ninja.y-=1
            world[ninja.y][ninja.x] = 2
     
            drawWorld()
        }
    }

    if(key==press.right){
        if(world[ninja.y][ninja.x+1]!=0){
            if(world[ninja.y][ninja.x+1]==1){points+=1}
            world[ninja.y][ninja.x] = 3
            ninja.x+=1
            world[ninja.y][ninja.x] = 2
            
            drawWorld()
        }
 
    }

    if(key==press.down){
        if(world[ninja.y+1][ninja.x]!=0){
            if(world[ninja.y+1][ninja.x]==1){points+=1}
            world[ninja.y][ninja.x] = 3
            ninja.y+=1
            world[ninja.y][ninja.x] = 2

            drawWorld()
        }
    }
})