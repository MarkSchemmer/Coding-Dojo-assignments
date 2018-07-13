const bp = require('body-parser')
const api = require('./controller')
const page = require('./page_controller')
function router(app)
{
    app.use(bp.json())

    app.get('/api/tasks', api.allTasks)

    app.get('/api/tasks/:id', api.getTaskById)

    app.post('/api/tasks/:title', api.createTask)

    app.put('/api/tasks/:id', api.updateTaskById)

    app.delete('/api/tasks/:id', api.deleteTaskById)

    app.get('/', page.index)
}

module.exports = router