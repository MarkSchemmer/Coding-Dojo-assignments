const bp = require('body-parser')
const api = require('../config/controller')


function router (app){
    app.use(bp.json())
}

module.exports = router