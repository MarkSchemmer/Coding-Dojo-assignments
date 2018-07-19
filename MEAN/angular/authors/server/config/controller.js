const authorObj = require('../model/author')
const author = authorObj.author

function createAuthor (req, res){
    author.create(req.body)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function getAuthors(req, res){
    author.find({})
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function getAuthorById (req, res){
    author.findById(req.params.id)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function updateAuthorById (req, res){
    author
    .findByIdAndUpdate(req.params.id, req.body, { runValidators : true })
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function deleteAuthorById (req, res){
    author.findByIdAndRemove(req.params.id)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}



module.exports = {
    createAuthor : createAuthor,
    getAuthors : getAuthors,
    getAuthorById : getAuthorById,
    updateAuthorById : updateAuthorById,
    deleteAuthorById : deleteAuthorById
 }