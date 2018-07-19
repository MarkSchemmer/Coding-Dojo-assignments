const bp = require('body-parser')
const api = require('../config/controller')
const pages = require('./pages')

function router (app){
    app.use(bp.json())

    app.post('/api/authors', api.createAuthor)

    app.get('/api/authors', api.getAuthors)

    app.get('/api/authors/:id', api.getAuthorById)

    app.patch('/api/authors/:id', api.updateAuthorById)

    app.delete('/api/authors/:id', api.deleteAuthorById)

    app.all('*', pages.noneFound)
}

module.exports = router