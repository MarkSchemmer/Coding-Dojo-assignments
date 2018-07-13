
/*
    187 X 186

*/


const pol100 = 'https://opentdb.com/api.php?amount=1&category=24&difficulty=easy&type=multiple'
const pol200 = 'https://opentdb.com/api.php?amount=1&category=24&difficulty=medium&type=multiple'
const pol300 = 'https://opentdb.com/api.php?amount=1&category=24&difficulty=hard&type=multiple'
const political = [pol100, pol200, pol300]

const hist100 = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple'
const hist200 = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple'
const hist300 = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=hard&type=multiple'
const history = [hist100, hist200, hist300]

const comp100 = 'https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple'
const comp200 = 'https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple'
const comp300 = 'https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple'
const computer = [comp100, comp200, comp300]

let currentScore = 0



function passWhat(parent, amt){
    if(parent == 'pol'){
        return getUrl(amt, political)
    } else if (parent == 'hist'){
        return getUrl(amt, history)
    } else if (parent == 'comp') {
        return getUrl(amt, computer)
    }
}


function getUrl(amt,arr){
    return amt == '100'? arr[0] : amt == '200' ? arr[1] : amt == '300' ? arr[2] : null  
}

function shuffleAnswers(answers){
    let set = new Set()
    while(set.size<4){
        set.add(answers[Math.floor(Math.random()*4)])
    }
    return [...set]
}

function createDiv(obj){
    let correct = obj.results[0].correct_answer
    let options = obj.results[0].incorrect_answers
    options.push(correct)
    let rndAnswers = shuffleAnswers(options)
    let s = '<div class="quest"'
    s += '<p>' + obj.results[0].question + ' ?' + '</p>'
    rndAnswers.forEach(x => {
    
        s += '<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">'
        s += '<p>'+x+'</p>' 
    })

    s += '<input type="submit" class="btn btn-primary">'
    s += '</div>'
    return s
}


$(document).ready(function(){
   $('.info button').click(function(){
       const button = $(this)
       let innerText = $(this).text()
       let parentId = $(this).parent().attr('id')
       var url = passWhat(parentId, innerText)
       
       $.get(url, function(res){
            console.log(res)
            button.replaceWith(createDiv(res))
            
            $('.quest').css({
                'padding':'10px',
                'text-align':'left',
                'font-size':'14px',
            })
       })
   })
})