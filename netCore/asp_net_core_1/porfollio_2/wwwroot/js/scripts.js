
const c = (obj) => console.log(obj)

$(document).ready(function(){
    var url = "https://api.github.com/users/MarkSchemmer"
    $.ajax({
        url:url,
        method:"GET",
        success:function(res){
            $('#gitImg').attr('src', res.avatar_url).css({
                'width':'250px',
                'height':'250px'
            })
        }
    })

    $.ajax({
        url:url+"/repos",
        method:"GET",
        datatype:"json",
        success:function(res){
            console.log(res)
            $.each(res, function(index, value){
                var str = "<div><h3>"+value.name+"</h3>"
                str += " Please click link to url <a> "+value.html_url+"</a></div>"
                $(str).appendTo('.display')
            })
        }
    })
})