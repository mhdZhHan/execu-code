const Queue = require('bull')

const taskQueue = new Queue('task_queue')


const addTaskToQueue = async () => {

}

module.exports = addTaskToQueue
