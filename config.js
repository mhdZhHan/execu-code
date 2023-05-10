const config = require('./package.json').projectConfig

module.exports = {
    mongoConfig : {
        connectionUrl: config.mongoConnectionUrl,
        database_name: 'db_execu_code',
    },

    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort,
    },
}
