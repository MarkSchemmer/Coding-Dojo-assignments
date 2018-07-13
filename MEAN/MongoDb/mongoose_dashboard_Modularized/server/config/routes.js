const bp = require('body-parser')
const api = require('./controller')
function router(app){
    app.use(bp.urlencoded({extended:true}))

    app.get('/', api.index)

    app.get('/elephant/new', api.newElephantForm)

    app.post('/elephants', api.makeElephant)

    app.post('/elephants/:id', api.updateElephant)

    app.get('/elephants/:id', api.getElephant)

    app.get('/elephants/edit/:id', api.editElephant)

    app.get('/elephants/delete/:id', api.deleteElephant)
}

module.exports = router