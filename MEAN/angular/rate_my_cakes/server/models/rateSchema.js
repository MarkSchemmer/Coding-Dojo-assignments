const mongoose = require('mongoose')

let rateSchema = new mongoose.Schema({
    stars: {type:Number},
    comment : {type:String, default:""},
}, {timestamps:true})

module.exports = rateSchema