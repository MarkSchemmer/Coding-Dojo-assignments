const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    title : { type : String },
    price : { type : Number },
    url : { type : String }
}, {timestamps : true })


mongoose.model('product', productSchema)

let product = mongoose.model('product')

module.exports = {
    productSchema : productSchema,
    product : product
}