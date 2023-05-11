const generateFile = require('./generateFile')
const executeCpp = require('./executeCpp')
const executePython = require('./executePython')
const addTaskToQueue = require('./taskQueue')


module.exports = {
    generateFile,
    executeCpp,
    executePython,
    addTaskToQueue,
}
