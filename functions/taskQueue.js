const Queue = require('bull')

// model
const { Task } = require('../models')

// functions
const executePython = require('./executePython')
const executeCpp = require('./executeCpp')

const taskQueue = new Queue('task_queue')
const NUM_WORKERS = 5


taskQueue.process(NUM_WORKERS, async ({data})=> {
    let output = undefined

    console.log(data)
    const { id: taskId } = data
    const task = await Task.findById(taskId)

    if(!task){
        throw Error("Task not found")
    }

    console.log('Fetched task', task)

    try {
        // run the file and send the response 
        task['startedAt'] = new Date() // start execution
        if(task.language === 'cpp') {
            output = await executeCpp(task.filePath)
        }else if(task.language === 'python' || task.language === 'py'){
            output = await executePython(task.filePath)
        }
        task['completedAt'] = new Date() // end execution
        task['output'] = output
        task['status'] = 'success'

        await task.save()
        return true
    } catch (error) {
        console.log(error)
        task['completedAt'] = new Date() 
        task['output'] = JSON.stringify(error)
        task['status'] = 'error'

        await task.save()
        throw Error(JSON.stringify(error))
    }
    return
})

// handle error
taskQueue.on('failed', (error)=> {
    console.log(error.data.id, "failed", error.failedReason)
})

const addTaskToQueue = async (taskId) => {
    await taskQueue.add({ id: taskId })
}

module.exports = addTaskToQueue
