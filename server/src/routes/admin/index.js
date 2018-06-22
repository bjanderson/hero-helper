import express from 'express';

export const router = express.Router({ mergeParams: true });

router.get('/', function (req, res) {
  res.send('Admin API\n');
});
