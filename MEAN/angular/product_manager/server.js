const express = require('express') 
const mongoose = require('mongoose')
const path = require('path')
const router = require('./server/config/routes')


const app = express()

app.use(express.static(__dirname+'/client/dist/client'))
app.set('views', path.join(__dirname,'/client/dist/client'))
app.set(mongoose.connect('mongodb://localhost/prod'), {useNewUrlParser:true})



router(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

app.listen(8000, function(){
    console.log('doing the good work!')
})