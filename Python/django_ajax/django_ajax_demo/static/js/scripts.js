
$(document).ready(function(){
    $('#users_json').click(function(){
       $.ajax({
           url:'/json_users',
           success:function(res){
               $('.display_1').html(JSON.stringify(res))
           }
       })
    })

    $('#users_html').click(function(){
        $.ajax({
            url:'/users_html',
            success: function(res) {  
                $('.display_1').html(res)
            }
        })
    })

    $('#create_user').submit(function(e){
        e.preventDefault()
        $.ajax({
            url:$(this).attr('action'),
            method:'POST',
            data: $(this).serialize(),
            success: function(res){
                obj = res[res.length-1]
                var str = '<div class="card"> <h5 class="card-header">'+ obj.fields.first_name +'</h5> <div class="card-body">'
                str += '<h5 class="card-title">ID:'+obj.pk+'</h5></div></div>'
               $('.show_new_user').html(str)
            }
        })
    })

    $('#find_user').keyup(function(e){
        e.preventDefault()
        $.ajax({
            url:$(this).attr('action'),
            method:'POST',
            data:$(this).serialize(),
            success: function(res){
                $('.dem_2').html(res)
            }
        })
    })
})