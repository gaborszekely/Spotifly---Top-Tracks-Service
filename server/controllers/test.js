const redis = require('redis');
const Track = require('../../database/postgres/models/Track');
const Artist = require('../../database/postgres/models/Artist');

const client = redis.createClient(6379);

module.exports = (req, res) => {
  Track.findOne({ where: { id: 12345 }, include: [Artist] })
    .then(track => {
      client.setex('test', 7200, JSON.stringify(track));
      res.status(200).json(track);
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .json({ error: true, message: 'Could not load test results' });
    });
};
