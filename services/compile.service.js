const { generateFile } = require('../functions/generateFile')
const { executeCpp } = require('../functions/executeCpp')
const { executePython } = require('../functions/executePython')


const compleCode = async (language, code) => {
    let response_data = {}

    let output = undefined

    if(!code) {
        response_data = {
            status: false,
            message: "Please provide a code",
        }
    }

    try {
        // generate the file with code
        const filePath = await generateFile(language, code)

        // run the file and send the response 
        if(language === 'cpp') {
            output = await executeCpp(filePath)
        }else if(language === 'python' || language === 'py'){
            output = await executePython(filePath)
        }

        response_data = {
            status: true,
            filePath: filePath,
            output: output,
        }
        
    } catch (error) {
        response_data = {
            status: false,
            error: error
        }
    }

    return response_data
}

module.exports = {
    compleCode,
}