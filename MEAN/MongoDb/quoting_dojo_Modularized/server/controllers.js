const quote = require('../server/models')

function index(req,res){
    res.render('index')
}

function gettingQuotes(req, res){
    quote.find({}).then(function(data){
        
        let quotes = {'quotes':data.sort(x => x.createdAt)}
        res.render('quote', quotes)
    })
}


function addQuote(req, res){
    let q = new quote()
    q.name = req.body.name 
    q.quote = req.body.quote
    q.save(function(err){
        if(err){
            console.log('we have erros', err)
            for(let key in err.errors){
                req.flash('registration', err.errors[key].message)
            }
            res.redirect('/')
        } else {
            res.redirect('/quotes')
        }
    })
}

module.exports = {
    index:index,
    gettingQuotes:gettingQuotes,
    addQuote:addQuote,
}