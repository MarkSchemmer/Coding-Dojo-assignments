const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
    name:{type:String, required:true}
}, {timestamps:true})

mongoose.model('test4', personSchema)

let person = mongoose.model('test4')

module.exports = person