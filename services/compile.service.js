const { generateFile } = require('../functions/generateFile')
const { executeCpp } = require('../functions/executeCpp')


const compleCode = async (language, code) => {
    let response_data = {}

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
        const output = await executeCpp(filePath)

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