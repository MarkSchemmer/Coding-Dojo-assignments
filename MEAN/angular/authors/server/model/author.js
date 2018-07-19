const mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
    name : {
         type : String, 
         required : [true, 'name cannot be blank'],
         minlength : [2, 'name cannot be less than 2 chars'],
    }
}, {timestamps:true})

mongoose.model('author', authorSchema)

let author = mongoose.model('author')

module.exports = {
    author : author,
    authorSchema : authorSchema
}

