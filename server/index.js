require('newrelic');
require('../database/postgres/db');

const express = require('express');
const cors = require('cors');

const tracksRouter = require('./router.js');

const app = express();

app.use(cors());

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(`${__dirname}/../client/dist`));

app.use('/tracks', tracksRouter);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
