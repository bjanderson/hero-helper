import express from 'express';
import { VillainDb } from '../../db';
import { Villain } from '../../models';

export const router = express.Router({ mergeParams: true });

function createVillain(req, res, next) {
  const hero = new Villain(req.body);
  VillainDb.create(hero);
  res.json(hero);
}

function deleteVillain(req, res, next) {
  const id = req.params.id;

  VillainDb.delete(id);
  res.status(200).send();
}

function getAllVillains(req, res, next) {
  const villains = VillainDb.getAll();
  res.json(villains);
}

function getVillain(req, res, next) {
  const id = req.params.id;
  const villain = VillainDb.get(id);
  res.json(villain);
}

function updateVillain(req, res, next) {
  const hero = new Villain(req.body);
  VillainDb.update(hero);
  res.json(hero);
}

router.get('/:id', getVillain);
router.delete('/:id', deleteVillain);
router.get('/', getAllVillains);
router.post('/', createVillain);
router.put('/', updateVillain);
