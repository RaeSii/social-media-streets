const router = require('express').Router()
const userRoutes = require('./user-routes')
const thoughtsRoutes = require('./thought-routes')
router.use('/api/user',userRoutes)
router.use('/api/thoughts', thoughtsRoutes)

module.exports = router