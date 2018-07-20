const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    title : { 
            type : String, 
            required : [true, 'title cannot be left blank!'],
            minlength : [4, 'title must have more than 4 chars!']
          },
    price : { 
        type : Number,
        required : [true, 'Please input a price!']
     },
    url : { type : String }
}, {timestamps : true })


mongoose.model('product', productSchema)

let product = mongoose.model('product')

module.exports = {
    productSchema : productSchema,
    product : product
}