const express = require('express')
const router = express.Router()


router.post('/run', async (req, res)=>{
    return res.json(req.body)
})

module.exports = router