const { exec } = require('child_process')

const executePython = (filePath) => {
    return new Promise((resolve, reject)=> {
        exec(
            `python3 ${filePath}`,
            (error, pyOut, pyError)=>{
                error && reject({error: pyError})
                pyError && reject(pyError)
                pyOut && resolve(pyOut)
            }
        )
    })
}

module.exports = {
    executePython
}
