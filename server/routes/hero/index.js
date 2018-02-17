const express = require('express')
const router = express.Router({ mergeParams: true })

const db = require('../../db')

function getHero(req, res, next) {
  const id = req.params.id
  const hero = db.heroDb.get(id)
  res.json(hero)
}

router.get('/:id', getHero)

router.get('/', function (req, res) {
  res.send('Hero API\n')
})

module.exports = router
