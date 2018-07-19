const bp = require('body-parser')
const api = require('./controller')

function router (app){

    app.use(bp.json())

    app.get('/api/products', api.products)

    app.get('/api/products/:id', api.productById)

    app.patch('/api/products/:id', api.updateProductById)

    app.delete('/api/products/:id', api.deleteProductById)

    app.post('/api/products', api.createProduct)
}

module.exports = router