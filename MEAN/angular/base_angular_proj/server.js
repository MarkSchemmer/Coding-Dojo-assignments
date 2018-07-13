const express = require('express')
const router = require('./server/config/routes')
const path = require('path')
const app = express()

app.use(express.static(__dirname+'/client/dist/client'))

app.set('views', path.join(__dirname,'/client/dist/client/'))

router(app)

app.listen(8000, function(){
    console.log('Doing the good work!')
})