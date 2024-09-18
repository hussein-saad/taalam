const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

app.use(express.json({ limit: '250kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
