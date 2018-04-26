$(document).ready(function(){

    var userData = ['First Name', 'Last Name', 'Email Address', 'Contact#']



    $('.cont').css({
        'width':'800px',
        'height':'800px',
        'border':'1px solid black',
        'margin':'auto',
        'font-family':'Arial',
    })

    $('<div class="nav"><ul></ul></div>').appendTo('.cont')

    $('.nav ul').css({
        'width':'600px',
        'border':'1px solid black',
        'border-radius':'2px',
        'margin':'auto',
        'margin-top':'30px',
    })

    $.each(userData,function(index,value){
        $('<li>'+value+'</li>').appendTo('.nav ul').css({
            'display':'inline-block',
            'width':'120px',
            'margin-right':'auto',
            'margin-left':'auto',
            'padding':'10px',
        })
    })

    $('<div class="content"><h1>content</h1><form id="addUser"></form></div>').appendTo('.cont').css({
       'width':'450px',
        'margin-left':'80px',
        'font-weight':'bolder',
    })

    $('.content h1').css({
        'border-bottom':'5px solid black',
        'padding-bottom':'20px',
    })

    $.each(userData, function(index,value){
        var val = value.toString()
        var valClass = val.replace(/\s+/,'')
        console.log(val)
        console.log(typeof val)
        $('<div class="form-box  '+valClass+'"><label>'+val+'</label><input type="text" name="'+val+'" placeholder="'+val+'"></div>')
        .appendTo('.content #addUser')
    })

    $('<input class="button" type="submit" value="submit">').appendTo('#addUser')


    $('.form-box').css({
        'margin-right':'0px',
    })


    function makeTable(json){
            console.log(json)
            var tableRowClass = json[0].value+json[1].value
            $('<tr class="'+tableRowClass+'">').appendTo('.nav ul')
            json.forEach(element => {
                $('<td>'+element.value+'</td>').appendTo('.nav ul')
            });
            $('</tr>').appendTo('.nav ul')
        
    }


    $('#addUser').submit(function(event){
        var obj = {}
        makeTable(JSON.parse(JSON.stringify(jQuery(this).serializeArray())))

        return false 
    })





})