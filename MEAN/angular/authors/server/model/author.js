const mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
    name : String 
}, {timestamps:true})

mongoose.model('author', authorSchema)

let author = mongoose.model('author')

module.exports = {
    author : author,
    authorSchema : authorSchema
}

