import express from 'express';
import { router as adminRoutes } from './admin';
import { router as errorRoutes } from './error';
import { router as heroRoutes } from './hero';
import { router as villainRoutes } from './villain';

export const router = express.Router({ mergeParams: true });

router.use('/admin', adminRoutes);
router.use('/error', errorRoutes);
router.use('/hero', heroRoutes);
router.use('/villain', villainRoutes);

router.get('/', function (req, res) {
  res.send('Hero Helper API\n');
});
