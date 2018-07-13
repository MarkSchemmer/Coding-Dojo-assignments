const ele = require('../models/models')

function index(req, res){
    ele.find({}).then(function(data){
        res.render('index', {'elephants':data})
    })
}

function newElephantForm(req,res){
    res.render('NewMong')
}

function makeElephant(req, res){
    ele.create(req.body)
    .then( data => res.redirect('/'))
    .catch(err => {
        console.log('we have errors ')
        for(let key in err.errors){;
             req.flash('newElephant', err.errors[key].message)
        }
        res.redirect('/elephant/new')
    })
}

function updateElephant(req, res){
    ele.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.redirect('/'))
        .catch(err => {
            console.log(' we have errors ', err)
            for(let key in err.errors){
                req.flash('newElephant', err.errors[key].message)
            }
            res.redirect('/elephants/edit/'+req.params.id)
        })
}

function getElephant(req, res){
    ele.findById(req.params.id)
        .then(data => res.render('about', {'elephants': data[0]}))
}

function editElephant(req, res){
    ele.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.render('edit', {'elephant':data[0]}))
        .catch(err => res.redirect('/'))
}

function deleteElephant(req, res){
    ele.findByIdAndRemove(req.params.id)
        .then(data => res.redirect('/'))
        .catch(err => res.redirect('/'))
}



module.exports = { 
    index:index,
    newElephantForm:newElephantForm,
    makeElephant:makeElephant,
    updateElephant:updateElephant,
    getElephant:getElephant,
    editElephant:editElephant,
    deleteElephant:deleteElephant,
 }