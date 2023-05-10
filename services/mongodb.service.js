const mongoose = require('mongoose')
const { mongoConfig } = require('../config')


class MongoDb {
    static connectToMongoDb = async () => {
        try {
            await mongoose.connect(
                mongoConfig.connectionUrl, 
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            )

            console.log('Successfully connected to mongodb 🚀')
        } catch (error) {
            console.error(error)
            process.exit(1) // process code '1' means an error occured. '0' means success
        }
    }
}

module.exports = {
    MongoDb,
}
