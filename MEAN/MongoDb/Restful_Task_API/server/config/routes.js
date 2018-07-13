const bp = require('body-parser')
const api = require('./controller')
function router(app)
{
    app.use(bp.json())

    app.get('/api/all/', api.allTasks)

    app.get('/api/taskid/:id', api.getTaskById)

    app.post('/api/new/:title/', api.createTask)

    app.put('/api/taskUpdate/:id/:title', api.updateTaskById)

    app.delete('/api/delete/:id', api.deleteTaskById)
}

module.exports = router