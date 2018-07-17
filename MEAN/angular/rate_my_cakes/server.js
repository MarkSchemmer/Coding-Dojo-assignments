const express = require('express')
const path = require('path')
const router = require('./server/config/routes')
const mongoose = require('mongoose')

const app = express()

app.use(express.static(__dirname+'/client/dist/client'))
console.log(__dirname)
app.set('views', path.join(__dirname,'/client/dist/client'))
app.set(mongoose.connect('mongodb://localhost/rate_cake_api4'), {useNewUrlParser:true})

router(app)

app.listen(8000, function(){
    console.log('doing the good work!!!!! In rate my cake project')
})