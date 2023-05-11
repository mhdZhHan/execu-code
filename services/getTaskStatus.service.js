// models
const { Task }  = require('../models')


const getTaskStatus = async (taskId) => {
    let response_data = {}

    if(!taskId){
        response_data = {
            status: false,
            message: 'Missing id query param'
        }
    }

    try {
        const task = await Task.findById(taskId)
        if(!task) {
            response_data = {
                status: false,
                message: 'Task not found'
            }
        }else {
            response_data = {
                status: true,
                task: task,
            }
        }
    } catch (error) {
        response_data = {
            status: false,
            error: JSON.stringify(error)
        }
    }

    return response_data
}

module.exports = getTaskStatus
