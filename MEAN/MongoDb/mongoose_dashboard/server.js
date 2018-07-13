
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
app.set(mongoose.connect('mongodb://localhost/test1'), {useNewUrlParser:true})

// models

let elephantSchema = new mongoose.Schema({
    name:{type:String},
    desc:{type:String},
    favColor:{type:String}
},{timestamps:true})

mongoose.model('test1', elephantSchema )

let ele = mongoose.model('test1')

// end models


// routes
app.get('/', function(req, res){
    ele.find({}).then(function(data){
        res.render('index', {'elephants':data})
    })
})

app.get('/elephant/new', function(req, res){
    res.render('NewMong')
})

app.post('/elephants', function(req, res){
    let newElephant = new ele()
    newElephant.name = req.body.name
    newElephant.desc = req.body.desc
    newElephant.favColor = req.body.color
    newElephant.save(function(err){
        if(err){
            console.log(' we have errors ', err)
            for(let key in err.errors){
                req.flash('newElephant', err.errors[key].message)
            }
            res.redirect('/elephant/new')
        } else {
            res.redirect('/')
        }
    })
})

app.post('/elephants/:id', function(req, res){

    console.log(' request the body now !!1',req.body)
    ele.findById(req.params.id).then(function(user){
        console.log('Im looking for the user  ',user)
        let data = req.body
        user.name = data.name
        user.desc = data.desc
        user.favColor = data.color
    user.save(function(err){
        if(err){
            console.log(' we have errors ', err)
            for(let key in err.errors){
                req.flash('newElephant', err.errors[key].message)
            }
            res.redirect('/elephants/edit/'+req.params.id)
        } else {
            res.redirect('/')
        }
    })

    })

})


app.get('/elephants/:id', function(req, res){
    ele.find({_id:req.params.id}).then(function(data){
        console.log(data[0].name)
        res.render('about', { 'elephants': data[0] })
    })
})

app.get('/elephants/edit/:id', function(req, res){
    ele.find({_id:req.params.id}).then(function(data){
        console.log(data[0].name)
        res.render('edit', { 'elephant' : data[0] })
    })
})

app.get('/elephants/delete/:id', function(req, res){
    ele.findByIdAndRemove(req.params.id).then(function(data){
        res.redirect('/')
    })
})





// end routes


// helper functions 

// end helper functions

// listening to server...
app.listen(8000, function(){
    console.log('doing work hello world!')
})