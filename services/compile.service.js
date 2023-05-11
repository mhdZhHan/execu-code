// functions
const { generateFile, addTaskToQueue } = require('../functions')

// models
const { Task }  = require('../models')


const compleCode = async (language, code) => {
    let response_data = {}
    let task = undefined

    if(!code) {
        response_data = {
            status: false,
            message: "Please provide a code",
        }
    }

    try {
        // generate the file with code & return the path
        const filePath = await generateFile(language, code)
        
        // create a new code details object based on the Code Model
        task = await new Task({ language, filePath }).save()
        const taskId = task['_id']

        addTaskToQueue(taskId)

        response_data = {
            status: true,
            taskId,
        }
        
    } catch (error) {
        response_data = {
            status: false,
            error: JSON.stringify(error)
        }
    }

    return response_data
}

module.exports = compleCode
