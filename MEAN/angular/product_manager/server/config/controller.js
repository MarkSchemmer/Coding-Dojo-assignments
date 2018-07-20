
const ModelObj = require('../model/product')
const product = ModelObj.product

function products (req, res) {
    product.find({})
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function productById (req, res) {
    product.findById(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function updateProductById (req, res) {
    product
    .findByIdAndUpdate(req.params.id, req.body, { runValidators:true })
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function createProduct (req, res) {
    product.create(req.body)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}


function deleteProductById (req, res) {
    product
    .findByIdAndRemove(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}


module.exports = {
    products : products,
    productById : productById,
    updateProductById : updateProductById,
    createProduct : createProduct,
    deleteProductById : deleteProductById,
}