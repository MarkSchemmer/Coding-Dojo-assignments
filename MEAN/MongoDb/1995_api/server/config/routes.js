const bp = require('body-parser')
const api = require('./controller')
function router(app)
{
    app.use(bp.json())

    app.get('/api/all/', api.allPeople)

    app.get('/api/:name', api.getPerson)

    app.get('/api/new/:name/', api.createPerson)

    app.get('/api/delete/:name', api.deletePerson)

}

module.exports = router