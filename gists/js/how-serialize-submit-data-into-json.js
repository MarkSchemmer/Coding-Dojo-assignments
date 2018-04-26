
    // passed the json into this function to add table row
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
    // makes the data into json 
    makeTable(JSON.parse(JSON.stringify(jQuery(this).serializeArray())))
    // prevents the submit from reverting to other page
    return false 
})