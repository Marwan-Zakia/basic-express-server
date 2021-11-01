'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./ middleware/ logger');
const validator = require('./ middleware/validator');
const PORT=process.env.PORT||3001;

app.get('/', (req, res) => {
  res.status(200).send('everything is awesome');
});


app.get('/error', (req, res, next) => {
  throw new Error('Sorry');
});


app.get('/person',validator, (req, res) => {
let peopleNames ={name :req.query.name}
res.json(peopleNames);
});

app.use('*', notFoundHandler);
app.use(logger);
app.use(validator);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`the server shall start at ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start}