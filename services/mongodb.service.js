const mongoose = require('mongoose')
const { mongoConfig } = require('../config')


class MongoDb {
    static connectToMongoDb = async () => {
        mongoose.connect('mongodb://127.0.0.1:27017/db_execu_code', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });

    }
}

module.exports = {
    MongoDb,
}
