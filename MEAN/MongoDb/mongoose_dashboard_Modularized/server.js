
// includes
const sess = require('express-session')
const express = require('express')
const mongoose = require('mongoose')
const flash = require('express-flash')
const path = require('path')
const router = require('./server/config/routes')
// initialize app
const app = express()

// usings statements

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

router(app)

app.listen(8000, function(){
    console.log('doing work hello world!')
})