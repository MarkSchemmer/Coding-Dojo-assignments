const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title:{type:String, minlength:2, required:true},
}, {timestamps:true})

mongoose.model('book', bookSchema)

let book = mongoose.model('book')


let authorSchema = new mongoose.Schema({
    first_name:{type:String, minlength:2},
    last_name:{type:String, minlength:2},
    origin:{type:String, minlength:3},
    authoredBooks:[bookSchema],
}, {timestamps:true})

mongoose.model('author', authorSchema)

let author = mongoose.model('author')

module.exports = {
    author:author,
    book:book
}