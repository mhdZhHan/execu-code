const express = require('express')
const router = express.Router()

// services
const { compleCode } = require('../../../../services/compile.service')


router.post('/run', async (req, res)=>{
    const { language = 'cpp', code } = req.body // language = 'cpp' (passing a default value (ES6))
    const response = await compleCode(language, code)

    res.json(response)
})

module.exports = router