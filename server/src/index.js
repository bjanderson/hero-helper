import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import { router } from './routes';
import { setJsonHeaders } from './routes/util-middleware';

const server = express();

server.use(morgan(':method :url :status - :response-time ms'));

server.use(bodyParser.json());

server.use('/api', setJsonHeaders, router);

server.listen(3001, () => {
  console.log('Server is running at localhost:3001');
});
