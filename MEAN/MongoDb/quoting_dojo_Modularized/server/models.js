const mongoose = require('mongoose')

let quoteSchema = new mongoose.Schema({
    name : { type : String, minlength:2 },
    quote:{ type : String, minlength:5 }
}, {timestamps:true})

mongoose.model('test', quoteSchema)
let quote = mongoose.model('test')

module.exports = quote