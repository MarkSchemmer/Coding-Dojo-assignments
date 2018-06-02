
$(document).ready(function () {

       $('#make_note').submit(function(e){
            e.preventDefault()
           $.ajax({
                url:$(this).attr('action'),
                method:'POST',
                data:$(this).serialize()

           }).done(function(response){
                $('#note_display').html(response)
                $('#note').val('')
           })
       })
       
  })