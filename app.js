const express = require('express')

// config
const { serverConfig } = require('./config')

// routes
const indexRouter = require('./routes/index')
const compilerRouter = require('./routes/api/v1/compiler')

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

// rotes setup
app.use('/', indexRouter)
app.use('/api/v1/compiler', compilerRouter)


// server listen
app.listen(serverConfig.port, serverConfig.ip, ()=>{
    console.log(`Server running on http://${serverConfig.ip}:${serverConfig.port}`)
})