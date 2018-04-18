require('newrelic')

const throng = require('throng');
const cache = require('./controllers/cache')
const WORKERS = process.env.WEB_CONCURRENCY || 1;

// const port = process.env.PORT || 3000;
// throng({
//   workers: WORKERS,
//   lifetime: Infinity
// }, start);

// function start() {

  const express = require('express');
  const app = express();
  const port = process.env.PORT || 7000;

    var https = require('https');
    https.globalAgent.maxSockets = Infinity;
    app.https=https

    var http = require('http');
    http.globalAgent.maxSockets = Infinity;
    app.http=http
  /* ===========BODY_PARSER=========== */
  const bodyParser = require('body-parser');
  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // Parse application/json
  app.use(bodyParser.json());
  // Parse application/vnd.api+json as json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  /* =============ROUTES============= */
  //
  const router = express.Router();
  //


  router.post('/store/:key', cache.set);

  router.post('/delete/:key', cache.delete);
  router.get('/:key', cache.get);


  app.use('/', router);

  app.listen(port);
// };
