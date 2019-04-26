require('newrelic');
require('../database/postgres/db');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const tracksRouter = require('./router.js');

const app = express();

// Middleware Setup

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));

// Routes Setup

app.use('/tracks', tracksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
