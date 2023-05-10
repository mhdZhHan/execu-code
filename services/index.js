const compleCode = require('./compile.service')
const MongoDb = require('./mongodb.service')
const getTaskStatus = require('./getTaskStatus.service')


module.exports = {
    compleCode,
    getTaskStatus,
    MongoDb,
}
