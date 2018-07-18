const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./server/config/router')


const app = express()

app.use(express.static(__dirname+'/client/dist/client'))
console.log(__dirname)
app.set('views', path.join(__dirname,'/client/dist/client'))
app.set(mongoose.connect('mongodb://localhost/auth'), {useNewUrlParser:true})



app.listen(8000, function(){
    console.log('doing the good work!')
})