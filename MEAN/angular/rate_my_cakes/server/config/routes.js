const bp = require('body-parser')
const api = require('./controller')
//const page = require('./page_controller')


/*
    /api/cakes

    get, post,

    /api/cakes/:id  -> update, delete, put patch


    /api/ratings -> get, post

    I think this will be all the calls that I will need so far 

*/

function router(app)
{
    app.use(bp.json())

    app.get('/api/cakes', api.cakes)

    app.get('/api/cakes/:id', api.getCakeById)

    app.post('/api/cakes', api.createCake)

    app.post('/api/rates/:id', api.addRatingToCake)

    app.delete('/api/cakes/:id', api.deleteCake)

 //   app.get('/', page.index)
}

module.exports = router