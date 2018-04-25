
$(document).ready(function(){

    function addContentToInfoButton(){

        $('.cont').css({
            'background-color':'#000000',
            'max-width':'800px',
            'height':'800px',
            'margin':'auto',
            'border':'10px solid #808080',
            'border-radius':'10px',
            'font-family':'Arial'
        })
    
        $('.info-area').css({
            'width':'400px',
            'height':'250px',
            'background-color':'#a3a4a6',
            'border':'10px solid #7e7e7e',
            'border-radius':'10px',
            'margin':'auto',
            'margin-top':'100px',
            'padding-left':'50px'
    
        })

        var arenas = ['Beach','Planet','Dojo','Forest','Matrix','Snow']
        var imageUrls = [
            '../dojo_arena_photos/beach.jpg',
            '../dojo_arena_photos/earth.jpg',
            '../dojo_arena_photos/dojo.jpg',
            '../dojo_arena_photos/forest.jpg',
            '../dojo_arena_photos/matrix.jpg',
            '../dojo_arena_photos/snow.jpg'
        ]

        var ImageKeys = arenas.reduce((acc,val,idx) => {
            acc[val] = imageUrls[idx]
            return acc
        },{})

        var characters = ['select player','donny','leo','mikey','raphael']
        var characterImageUrls = [
            '',
            '../dojo_arena_photos/donny.png',
            '../dojo_arena_photos/leo.png',
            '../dojo_arena_photos/mikey.png',
            '../dojo_arena_photos/raphael.png'
        ]

        var characterImageKeys = characters.reduce((acc,val,idx) =>{
                acc[val] = characterImageUrls[idx]
                return acc 
        },{})

        $('<h1>Select Arena</h1>').appendTo('.info-area').css({
            'text-align':'center',
            'color':'#f6d280',
        })

        $.each(arenas, function(index,value){
            $('<button name='+value+'>'+value+'</button>').appendTo('.info-area').css({
                'padding':'10px',
                'width':'120px',
                'border-radius':'3px',
                'margin-right':'10px',
                'margin-bottom':'5px',
                'margin':'auto'

            })
        })

        function selectPlayer(){

            $('.info-area').html('<h1>Select Players</h1><div class="fight"></div>').css({
                'text-align':'center',
                'color':'#f6d280',
            })

            $('<select class="player1" value="player1"></select>').appendTo('.info-area')
            $('<select class="player2"></select>').appendTo('.info-area')

            $.each(characters, function(index,value){
                $('<option value="'+value+'">'+value+'</option>').appendTo('select')
            })

            $('select').css({
                'margin':'auto',
                'margin-right':'20px',
                'padding':'10px'
            })
        }

        $('button').click(function(){
            selectPlayer()
        })

        $('button').hover(function(){
            var key = $(this).text()
            var image = ImageKeys[key]
            $('.cont').css({
                'background-image':'url('+image+')'
            })
        })

        $(document).on('change','select',function(){
            var player = $(this).attr('class')
            var imageClass = '.img-player'
            if(player=='player1')
                imageClass += 1
            else 
                imageClass += 2
            var name = $(this).val()
            var characterImage = characterImageKeys[name]
            $(imageClass).attr('src',characterImage)
            console.log($('.player1').val())
            var charactersOnly = characters.filter((e,i) => i > 0)
            
            if(~charactersOnly.indexOf($('.player1').val()) && ~charactersOnly.indexOf($('.player2').val())){
                $('.fight').html('<h3>FIGHT</h3>')
            }else{
                $('.fight').html('')
            }


        })
    }

    addContentToInfoButton()





})