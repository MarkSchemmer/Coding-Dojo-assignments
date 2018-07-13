const m = require('../models/AuthorSchema')


function authors (req, res){
    m.author.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function authorById (req, res){
    m.author.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}


function createAuthor (req, res){
    m.author.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function createBookAddToAuthor (req, res){
    m.author.findByIdAndUpdate(req.params.id, 
        { $push:{ 
                authoredBooks: req.body 
            }}).then(data => res.json(data))
            .catch(err => res.json(err))
}

function updateAuthorById (req, res){
    m.author.findByIdAndUpdate(req.params.id, req.body)
        .then(d => res.json(d))
        .catch(e => res.json(e))
}

function deleteBookById (req, res){
    m.book.findByIdAndRemove(req.params.id)
        .then(d => res.json(d))
        .catch(e => res.json(e))
}

function deleteAuthorById (req, res){
    m.author.findByIdAndRemove(req.params.id)
        .then(d => res.json(d))
        .catch(e => res.json(e))
}



module.exports = {
    authors:authors,
    authorById:authorById,
    createAuthor:createAuthor,
    createBookAddToAuthor:createBookAddToAuthor,
    updateAuthorById:updateAuthorById,
    deleteBookById:deleteBookById,
    deleteAuthorById:deleteAuthorById,
}