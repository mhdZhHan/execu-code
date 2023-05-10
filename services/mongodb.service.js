const mongoose = require('mongoose')
const { mongoConfig } = require('../config')


class MongoDb {
    static connectToMongoDb = async () => {
        const uri = `${mongoConfig.connectionUrl} ${mongoConfig.database_name}`

        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Connected to the database')
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error)
        })
    }
}

module.exports = {
    MongoDb,
}
