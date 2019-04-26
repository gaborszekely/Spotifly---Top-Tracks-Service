const redis = require('redis');
const Artist = require('../../database/postgres/models/Artist');
const Track = require('../../database/postgres/models/Track');

const client = redis.createClient(6379);

module.exports = async (req, res) => {
  Track.findAll({
    order: [['playcount', 'DESC']],
    limit: 10,
    include: [Artist],
  })
    .then(tracks => {
      client.setex('toptracks', 7200, JSON.stringify(tracks));
      res.status(200).json(tracks);
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .json({ error: true, message: 'Could not return top tracks.' });
    });
};
