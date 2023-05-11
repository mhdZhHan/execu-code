const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')


const outputPath = path.join(__dirname, '../cpp_outputs')

if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {recursive: true})
}

const executeCpp = (filePath) => {
    // split file with [filename, extension] and get the filename without extension
    const fileName = path.basename(filePath).split('.')[0]
    // get the cpp out file path
    const outPath = path.join(outputPath, fileName)

    console.log("File name: ",fileName)
    console.log("out file path: ",outPath)

    return new Promise((resolve, reject)=> {
        exec(
            `g++ ${filePath} -o ${outPath} && cd ${outputPath} && ./${fileName}`,
            (error, codeOut, codeError) => {
                error && reject({error, codeError})
                codeError && reject(codeError)
                resolve(codeOut)
            }
        )
    })
}

module.exports = executeCpp
