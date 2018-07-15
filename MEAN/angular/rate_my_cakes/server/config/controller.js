const cake = require('../models/cake')
const rate = require('../models/rate')

function cakes (req, res){
    cake.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function getCakeById (req, res){
    cake.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function createCake (req, res){
    cake.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function deleteCake (req, res){
    cake.findByIdAndRemove(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function addRatingToCake (req, res){
        cake
        .findByIdAndUpdate( req.params.id, {
            $push : {
                 ratings : req.body
            }})
            .then(data => res.json(data))
            .catch(err => res.json(err))
}

module.exports = {
    cakes : cakes,
    createCake: createCake,
    deleteCake:deleteCake,
    addRatingToCake:addRatingToCake,
    getCakeById:getCakeById,
}