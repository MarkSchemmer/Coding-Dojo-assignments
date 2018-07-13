const page = require('../controllers/controller')
const bp = require('body-parser')

function router(app)
{   app.use(bp.urlencoded({extended:true}))
    app.get('/', page.index)
}

module.exports = router