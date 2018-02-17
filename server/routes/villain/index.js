const express = require('express')
const router = express.Router({ mergeParams: true })

router.get('/', function (req, res) {
  res.send('Villain API\n')
})

module.exports = router
