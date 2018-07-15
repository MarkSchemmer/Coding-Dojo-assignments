const mongoose = require('mongoose')
const rateSchema = require('./rateSchema')


mongoose.model('rate', rateSchema)
let rate = mongoose.model('rate')

module.exports = rate 