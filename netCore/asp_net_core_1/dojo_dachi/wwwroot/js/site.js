// Write your JavaScript code.

$(document).ready(function(){

function update(obj){
    $.each(obj, function(item, value){
        $('.'+item).html(item + " " + value)
    })
}


function hideAndAddBtn(){
    $('.card-footer').hide()
    $('.card-body').append('<button>Restart</button>')
}



function check(){
    var full = Number($('.full').text().split(' ')[1])
    var happiness =  Number($('.happiness').text().split(' ')[1])
    var energy = Number($('.energy').text().split(' ')[1])

    
    if([full, happiness, energy].every(x => x >= 100)){
            $('.card-body').append('<h2>You win</h2>')
            hideAndAddBtn()

    }else if([full, happiness].some(x => x <= 0 )){
            $('.card-body').append('<h2>You lose</h2>')
            hideAndAddBtn()
    }

}

   $('.a').click(function(){
       console.log('clicked')
       $.ajax({
           url:'action/'+$(this).attr('id'),
           method:"GET",
           success:function(res){
               var obj = {
                   'full':res.fullness,
                   'energy':res.energy,
                   'happiness':res.happiness,
                   'meals':res.meals
               }
                update(obj)
                check()
           }
       })
   }) 
})