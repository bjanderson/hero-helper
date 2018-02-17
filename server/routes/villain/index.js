const express = require('express')
const router = express.Router({ mergeParams: true })

const db = require('../../db')

function getVillain(req, res, next) {
  const id = req.params.id
  const villain = db.villainDb.get(id)
  res.json(villain)
}

router.get('/:id', getVillain)

router.get('/', function (req, res) {
  res.send('Villain API\n')
})

module.exports = router
