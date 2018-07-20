const ModelObj = require('../model/model')
const obj = ModelObj.product

function allObjs (req, res) {
    obj.find({})
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function objById (req, res) {
    obj.findById(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function updateObjById (req, res) {
    obj
    .findByIdAndUpdate(req.params.id, req.body, { runValidators:true })
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function createObj (req, res) {
    obj.create(req.body)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}


function deleteObjById (req, res) {
    obj
    .findByIdAndRemove(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}


module.exports = {
    allObjs : allObjs,
    objById : objById,
    updateObjById : updateObjById,
    createObj : createObj,
    deleteObjById : deleteObjById,
}