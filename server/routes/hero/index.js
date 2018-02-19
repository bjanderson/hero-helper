import express from 'express'
import { HeroDb } from '../../db'
import { Hero } from '../../models'

export const router = express.Router({ mergeParams: true })

function createHero(req, res, next) {
  const hero = new Hero(req.body)
  HeroDb.create(hero)
  res.json(hero)
}

function deleteHero(req, res, next) {
  const id = req.params.id

  HeroDb.delete(id)
  res.status(200).send()
}

function getAllHeroes(req, res, next) {
  const heroes = HeroDb.getAll()
  res.json(heroes)
}

function getHero(req, res, next) {
  const id = req.params.id
  const hero = HeroDb.get(id)
  res.json(hero)
}

function updateHero(req, res, next) {
  const hero = new Hero(req.body)
  HeroDb.update(hero)
  res.json(hero)
}

router.get('/:id', getHero)
router.delete('/:id', deleteHero)
router.get('/', getAllHeroes)
router.post('/', createHero)
router.put('/', updateHero)
