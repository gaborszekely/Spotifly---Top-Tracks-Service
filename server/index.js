require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('../database/postgres/db');
const Artist = require('../database/postgres/models/Artist');
const Track = require('../database/postgres/models/Track');

const app = express();

// Middleware Setup

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));

// Routes Setup

app.get('/test', (req, res) => {
  Track.findOne({ where: { id: 12345 }, include: [Artist] })
    .then(track => {
      res.json(track);
    })
    .catch(console.error);
});

app.get('/data/toptracks', async (req, res) => {
  Track.findAll({
    order: [['playcount', 'DESC']],
    limit: 10,
    include: [Artist],
  })
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .json({ error: true, message: 'Could not return top tracks.' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
