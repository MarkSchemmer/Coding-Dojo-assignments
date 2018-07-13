const bp = require('body-parser')
const api = require('./controller')
const page = require('./page_controller')

/*
 api format for call...

 /api/authors -> GET, desc: gets all authors.....


 /api/authors/:id -> GET, desc: gets author by id but it will also have all of its books as well

*/

function router(app)
{
    app.use(bp.json())

    app.get('/', page.index)

    app.get('/api/authors', api.authors)

    app.get('/api/authors/:id', api.authorById)

    app.post('/api/authors', api.createAuthor)

    app.put('/api/books/:id', api.createBookAddToAuthor)

    app.put('/api/authors/:id', api.updateAuthorById)

    app.delete('/api/books/:id', api.deleteBookById)

    app.delete('/api/authors/:id', api.deleteAuthorById)
}

module.exports = router