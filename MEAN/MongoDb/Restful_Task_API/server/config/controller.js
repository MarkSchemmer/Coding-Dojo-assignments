const task = require('../models/models')

function createTask(req, res){
    let t = new task()
    t.title = req.params.title
    task.create(t)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function allTasks (req, res){
    task.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}


function deleteTaskById (req, res){
    task.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function getTaskById (req, res){
    task.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

function updateTaskById (req, res){
    task.findByIdAndUpdate(req.params.id, {title:req.params.title})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    createTask:createTask,
    allTasks:allTasks,
    deleteTaskById:deleteTaskById,
    getTaskById:getTaskById,
    updateTaskById:updateTaskById
}