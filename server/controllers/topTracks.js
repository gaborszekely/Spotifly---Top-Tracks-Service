const client = require('../../database/redis/index');
const Artist = require('../../database/postgres/models/Artist');
const Track = require('../../database/postgres/models/Track');

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
      res.status(500).json({ error: true, message: 'Could not return top tracks.' });
    });
};
