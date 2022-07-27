const { Router } = require('express')

const reverseRouter = require('./reverse')

const router = Router()

router.use('/iecho', reverseRouter)

module.exports = router
