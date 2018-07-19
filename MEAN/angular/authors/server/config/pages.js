const path = require('path')
function noneFound (req, res, next) {
    res.sendFile(path.resolve('./client/dist/client/index.html'))
}

module.exports = { noneFound : noneFound }