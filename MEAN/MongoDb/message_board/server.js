
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
app.set(mongoose.connect('mongodb://localhost/test2'), { useNewUrlParser : true } )

// models
let CommentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    comment:{type:String, minlength:10, required:true}
}, {timestamps:true})

let MessageSchema = new mongoose.Schema({
    name:{type:String, required:true},
    message:{type:String, minlength:10, required:true},
    Comments:[CommentSchema]
}, {timestamps:true})


let UserSchema = new mongoose.Schema({
    name:{type:String},
    Messages:[MessageSchema]
}, {timestamps:true})


const comment = mongoose.model('Comment', CommentSchema)
const message = mongoose.model('Message', MessageSchema)
const user = mongoose.model('User', UserSchema)
// end models

// routes
app.get('/', function(req, res){
    message.find({}).then(function(data){
        res.render('index', {'messages':data})
    })
})

app.post('/createMsg', function(req, res){
    let msg = new message()
    msg.name = req.body.name
    msg.message = req.body.mes
    msg.save(function(err){
        if(err){
            console.log(err)
            res.redirect('/')
        } else {
            console.log('it works')
            res.redirect('/')
        }
    })
})

app.post('/createComment/:id', function(req, res){
    message.update({_id:req.params.id},
        {$push:{Comments:{name:req.body.name, comment:req.body.comment}}}, function(err){
            if(err){
                console.log('erros', err)
                res.redirect('/')
            } else {
                console.log('success')
                res.redirect('/')
            }
        })
})

// end routes


// helper functions 

// end helper functions

// listening to server...
app.listen(8000, function(){
    console.log('server is working \n\n\n')
})