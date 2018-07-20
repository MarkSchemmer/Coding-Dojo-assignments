const bp = require('body-parser')
const api = require('./controller')

function router(app){
    
    app.use(bp.json())

    app.get('/api/objs', api.allObjs)

    app.get('/api/objs/:id', api.objById)

    app.patch('/api/objs/:id', api.updateObjById)

    app.delete('/api/objs/:id', api.deleteObjById)

    app.post('/api/objs', api.createObj)

}

module.exports = router