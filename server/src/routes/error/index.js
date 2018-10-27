import express from 'express';

export const router = express.Router({ mergeParams: true });

/**
 * Why have a server route that just serves up errors?
 *
 * Why to test your api caller error handling, of course!
 */

function error400(req, res, next) {
  res.status(400).send({error: 400, message: 'This is the 400 error message'});
}

function error403(req, res, next) {
  res.status(403).send({error: 403, message: 'This is the 403 error message'});
}

function error404(req, res, next) {
  res.status(404).send({error: 404, message: 'This is the 404 error message'});
}

function error500(req, res, next) {
  res.status(500).send({error: 500, message: 'This is the 500 error message'});
}

function error502(req, res, next) {
  res.status(502).send({error: 502, message: 'This is the 502 error message'});
}

function error503(req, res, next) {
  res.status(503).send({error: 503, message: 'This is the 503 error message'});
}

router.get('/', error404);
router.get('/400', error400);
router.get('/403', error403);
router.get('/404', error404);
router.get('/500', error500);
router.get('/502', error502);
router.get('/503', error503);
