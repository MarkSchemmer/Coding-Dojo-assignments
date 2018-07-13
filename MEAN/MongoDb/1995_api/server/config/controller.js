const person = require('../models/models')

function createPerson(req, res){
    let p = new person({
        name:req.params.name
    })
    person.create(p)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function allPeople (req, res){
    person.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}


function deletePerson (req, res){
    person.findOneAndRemove({name:req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function getPerson (req, res){
    person.findOne({name:req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    createPerson:createPerson,
    allPeople:allPeople,
    deletePerson:deletePerson,
    getPerson:getPerson,
}