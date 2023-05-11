const { exec } = require('child_process')

const executePython = (filePath) => {
    return new Promise((resolve, reject)=> {
        exec(
            `python3 ${filePath}`,
            (error, codeOut, codeError) => {
                error && reject({error, codeError})
                codeError && reject(codeError)
                resolve(codeOut)
            }
        )
    })
}

module.exports = executePython
