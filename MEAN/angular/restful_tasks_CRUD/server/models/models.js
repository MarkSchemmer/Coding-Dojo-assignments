const mongoose = require('mongoose')

let taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    desc: {type:String, default:""},
    completed: {type:Boolean, default:false}
}, {timestamps:true})

mongoose.model('task', taskSchema)

let task = mongoose.model('task')

module.exports = task