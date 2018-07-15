const mongoose = require('mongoose')
const cakeSchema = require('./cakeSchema')

mongoose.model('cake', cakeSchema)
let cake = mongoose.model('cake')

module.exports = cake