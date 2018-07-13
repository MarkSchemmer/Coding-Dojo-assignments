
// includes
const sess = require('express-session')
const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const flash = require('express-flash')
const path = require('path')

// initialize app
const app = express()

// usings statements
app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/static')))
app.use(flash())
app.use(sess({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// setting statements
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')
app.set(mongoose.connect('mongodb://localhost/test'))

// models

let quoteSchema = new mongoose.Schema({
    name : { type : String, minlength:2 },
    quote:{ type : String, minlength:5 }
}, {timestamps:true})

mongoose.model('test', quoteSchema)

let quote = mongoose.model('test')

// end models


// routes
app.get('/', function(req, res){
    res.render('index')
})

app.get('/quotes', function(req, res){
    quote.find({}).then(function(data){
        
        let quotes = {'quotes':data.sort(x => x.createdAt)}
        res.render('quote', quotes)
    })
 //   res.render('quote', quotes)
})


app.post('/addQuote', function(req, res){
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
})

// end routes


// helper functions 

// end helper functions

// listening to server...
app.listen(8000, function(){
    console.log('doing work hello world!')
})