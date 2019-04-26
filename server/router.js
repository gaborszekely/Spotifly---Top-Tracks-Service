const express = require('express');
const testController = require('./controllers/test');
const topTracksController = require('./controllers/topTracks');
const topTracksCache = require('./redis/cacheTracks');
const testCache = require('./redis/cacheTest');

const router = express.Router();

/*
  Type:           GET
  Endpoint:       /tracks/test
  Access:         Public
  Description:    Test endpoint for artillery stress testing
*/

router.get('/test', testCache, testController);

/*
  Type:           GET
  Endpoint:       /tracks/top
  Access:         Public
  Description:    Fetch top 10 artists and sort by play count in descending order
*/

router.get('/top', topTracksCache, topTracksController);

module.exports = router;
