// functions
const { generateFile, executeCpp, executePython } = require('../functions')

// models
const Code  = require('../models/Codemodel')


const compleCode = async (language, code) => {
    let response_data = {}

    let output = undefined

    let codeDetails = undefined

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
        codeDetails = await new Code({ language, filePath }).save()
        const codeDetailsId = codeDetails['_id']

        response_data = {
            status: true,
            codeDetailsId,
        }

        // run the file and send the response 
        codeDetails['startedAt'] = new Date() // start execution
        if(language === 'cpp') {
            output = await executeCpp(filePath)
        }else if(language === 'python' || language === 'py'){
            output = await executePython(filePath)
        }
        codeDetails['completedAt'] = new Date() // end execution

        codeDetails['status'] = 'success'
        codeDetails['output'] = output

        await codeDetails.save()
        console.log(codeDetails)
        
    } catch (error) {
        codeDetails['completedAt'] = new Date() 
        codeDetails['status'] = 'error'
        codeDetails['output'] = JSON.stringify(error)
        await codeDetails.save()

        console.log(codeDetails)

        response_data = {
            status: false,
            error: error,
        }
    }

    return response_data
}

module.exports = {
    compleCode,
}
