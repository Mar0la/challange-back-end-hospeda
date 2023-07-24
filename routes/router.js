const router = require('express').Router()

// eventos router
const eventRouter = require('./events')
router.use("/", eventRouter)

module.exports = router;