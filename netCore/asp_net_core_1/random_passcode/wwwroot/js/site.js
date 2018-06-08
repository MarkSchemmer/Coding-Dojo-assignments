// Write your JavaScript code.


$(document).ready(function(){

        $('#btn').click(function(){
            $.ajax({
                url:"genWord",
                method:"GET",
                success:function(res){
                    $('#input').attr('placeholder',res);
                }
            })
        })

})
