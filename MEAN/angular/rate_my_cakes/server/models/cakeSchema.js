const mongoose = require('mongoose')
const rateSchema = require('./rateSchema')

let taskSchema = new mongoose.Schema({
    name:{type:String, required:true},
    url : {type:String, default:""},
    ratings : [rateSchema]
}, {timestamps:true})

module.exports = taskSchema