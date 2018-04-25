$(document).ready(function(){
/*
        I need the user path and then finally the gravatar_url together
*/
    (function(){
        var counter = 5
        function timer(){
            setTimeout(function(){
                $('#time').text(counter)
                counter--
                if(counter>=0){
                    return timer()
                }else{
                    $('#time').hide("slow")
                    $('#myImage')
                    .attr('src',"https://avatars3.githubusercontent.com/u/18133440?v=4")
                    .removeClass()
                    .addClass('myImage')
                    .fadeIn('slow')
                }
      
            }, 1000)
        }
        timer()

    }())

    var cw_data
    function getData() {
       
     $.get('https://www.codewars.com/api/v1/users/Ze-Marcos',function(data){
       var props = {}
       props.name = data.name
       props.userName = data.username 
       props.honor = data.honor
       props.skillz = Object.keys(data.ranks.languages).map(x => x)
       cw_data = props
       
       }, 'json').done(function(){
           $('#cw .info').append("<h1>"+cw_data.name+"</h1>"+
                                 "<h1>"+cw_data.userName+"</h1>"+
                                "<h1>"+cw_data.honor+"</h1>")
            $.each(cw_data.skillz,function(k,v){
                $('#cw .info').append("<h3>"+v+"</h3>")
            })
       })
   }

   getData()

    $('#addClass').click(function(){

     $('.doc code').addClass('bkAndColor',1000)

    })

    $('#removeClasses').click(function(){
        $('.doc code').removeClass('bkAndColor',1500)
    })

    $('#hideMe').click(function(){
        $('#myImage').hide('slower')
    })

    $('#showMe').click(function(){
        $('#myImage').show('slower')
    })

    $('#showCWdata').click(function(){
        $('#cw .info').toggle('slow')
    })

    $('#slideDown').click(function(){
        $('#slideD .info').slideDown(600)
    })

    $('#slideUp').click(function(){
        $('#slideD .info').slideUp()
    })

    $('#slideToggle').click(function(){
        $('#slideToggle .info').slideToggle('slow')
    })
    var disabled = true 
    $('#fader button').click(function(){

        if(disabled){
            $('#fader .info').fadeOut(3000)
            disabled = false 
        }else{
            $('#fader .info').fadeIn(3000)
            disabled = true 
        }
    })

    $('#beforeAfter .info').hover(function(){
      //  $('#beforeAfter .info').addClass('display')
        $(this)
        .before("1")
        .after("3")
    })
})
