const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let objSchema = new mongoose.Schema({
    title : { 
            type : String, 
            required : [true, 'title cannot be left blank!'],
            minlength : [4, 'title must have more than 4 chars!'],
            unique : true 
          },
    price : { 
        type : Number,
        required : [true, 'Please input a price!']
     },
    url : { type : String }
}, {timestamps : true })

objSchema.plugin(uniqueValidator, {message : 'Name must be unique'})

mongoose.model('product', objSchema)

let obj = mongoose.model('product')

module.exports = {
    objSchema : objSchema,
    obj : obj
}