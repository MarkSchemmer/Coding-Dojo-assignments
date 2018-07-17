const bp = require('body-parser')
const api = require('./controller')

function router(app){
    app.use(bp.json())
}

module.exports = router