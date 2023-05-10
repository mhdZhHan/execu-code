// functions
const { generateFile, executeCpp, executePython } = require('../functions')

// models
const { Task }  = require('../models')


const compleCode = async (language, code) => {
    let response_data = {}

    let output = undefined

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

        response_data = {
            status: true,
            taskId,
        }

        // run the file and send the response 
        task['startedAt'] = new Date() // start execution
        if(language === 'cpp') {
            output = await executeCpp(filePath)
        }else if(language === 'python' || language === 'py'){
            output = await executePython(filePath)
        }
        task['completedAt'] = new Date() // end execution

        task['status'] = 'success'
        task['output'] = output

        await task.save()
        console.log(task)
        
    } catch (error) {
        task['completedAt'] = new Date() 
        task['status'] = 'error'
        task['output'] = JSON.stringify(error)
        await task.save()

        console.log(task)

        response_data = {
            status: false,
            error: error,
        }
    }

    return response_data
}

module.exports = compleCode
