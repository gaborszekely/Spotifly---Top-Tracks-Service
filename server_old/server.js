// Dependencies Setup

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db.js');

const app = express();

// Middleware Setup

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(morgan('dev'));

// Routes Setup

app.get('/data/toptracks', (req, res) => {
  db.getTopTracks()
    .then(results => {
      res.json(results);
    })
    .catch(console.log);
});

// Server Setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
