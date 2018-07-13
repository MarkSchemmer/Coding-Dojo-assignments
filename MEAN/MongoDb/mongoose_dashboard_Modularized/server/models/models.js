const mongoose = require('mongoose')

let elephantSchema = new mongoose.Schema({
    name:{type:String},
    desc:{type:String},
    favColor:{type:String}
},{timestamps:true})

mongoose.model('test1', elephantSchema )

let ele = mongoose.model('test1')

module.exports = ele 