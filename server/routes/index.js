const express = require('express')
const router = express.Router({ mergeParams: true })

const adminRoutes = require('./admin')
const heroRoutes = require('./hero')
const villainRoutes = require('./villain')

router.use('/admin', adminRoutes)
router.use('/hero', heroRoutes)
router.use('/villain', villainRoutes)

router.get('/', function (req, res) {
  res.send('Hero Helper API\n')
})

module.exports = router
