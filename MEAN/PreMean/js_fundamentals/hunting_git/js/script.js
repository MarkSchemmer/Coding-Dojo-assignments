$(document).ready(function(){
    let url = 'https://api.github.com/users/MarkSchemmer'
    $('#btn').click(function(){
        $.get(url, function(res){
            let myname = res.name 
            $('.info').html(myname)
        })
    })
})