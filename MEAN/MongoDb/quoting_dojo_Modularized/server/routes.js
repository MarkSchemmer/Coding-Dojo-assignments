const bp = require('body-parser')
const api = require('./controllers')
const mongoose = require('mongoose')
const path = require('path')

function router(app)
{
    app.use(bp.urlencoded({extended:true}))


    app.get('/', api.index)
    app.get('/quotes', api.gettingQuotes)
    app.post('/addQuote', api.addQuote)
}
module.exports = router