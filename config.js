const config = require('./package.json').projectConfig

module.exports = {
    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort,
    },
}