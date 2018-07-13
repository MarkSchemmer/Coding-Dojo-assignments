const express = require('express')
const path = require('path')
const router = require('./server/config/routes')
const mongoose = require('mongoose')

const app = express()

app.set(mongoose.connect('mongodb://localhost/test4'), {useNewUrlParser:true})


router(app)

app.listen(8000, function(){
    console.log('doing the good work all day and night!')
})