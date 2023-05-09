const path = require('path')
const fs = require('fs')
const { v4: uuidV4 } = require('uuid')

const dirCodes = path.join(__dirname, '../codes')

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes, {recursive: true}, (error)=> {
        if(error) throw error
    })
}

const generateFile = async (extension, code) => {
    const randomId = uuidV4()
    const filename = `${randomId}.${extension}`
    
    const filePath = path.join(dirCodes, filename)
    // insert code ito the file
    await fs.writeFileSync(filePath, code)

    return filePath
}

module.exports = {
    generateFile,
}