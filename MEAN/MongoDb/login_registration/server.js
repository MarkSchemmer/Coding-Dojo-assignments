
// includes
const sess = require('express-session')
const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const flash = require('express-flash')
const path = require('path')
const bc = require('mongoose-bcrypt')
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
app.set(mongoose.connect('mongodb://localhost/test3'), { useNewUrlParser : true } )


function validEmail(value){
    console.log(value)
    let re = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/
    return value.match(re)
}

function pswMtchConf(ps, psconf){
    return ps === psconf && ps.length > 7
}

// models
let userSchema = new mongoose.Schema({
    email:{ 
        type:String,
        unique:true, 
        required:true, 
    },
    first_name : {type:String, required:true},
    last_name : {type:String, required:true},
    psw:{type:String, required:true},
    birthday : { type : Date }
}, {timestamps:true})

userSchema.plugin(bc)

const user = mongoose.model('User', userSchema)

//user.schema.path('email').validate(validEmail, 'Invalid Email!!!!')




// end models

// routes

app.get('/', function(req, res){
    let err = null
    res.render('index', {err:err, ps:null})
})

app.get('/home', function(req,res){
    user.find({_id:req.session.cur_user}).then(function(data){
        res.render('home')
    })
})

app.post('/regis', function(req, res){

    user.create(req.body)
    .then( data => 
        {
             res.redirect('/home')
        })
    .catch(err => 
        {
             console.log(err.errors)
             res.render('index', {err:err.errors})
        })
})

// end routes




// listening to server...
app.listen(8000, function(){
    console.log('server is working \n\n\n')
})