const express = require('express')
const router = express.Router()

// services
const { compleCode, getTaskStatus } = require('../../../../services')


router.post('/run', async (req, res)=> {
    const { language = 'cpp', code } = req.body // language = 'cpp' (passing a default value (ES6))
    const response = await compleCode(language, code)

    res.json(response)
})


router.get('/status', async (req, res)=> {
    const taskId = req.query.id
    const response = await getTaskStatus(taskId)

    res.json(response)
})

module.exports = router
