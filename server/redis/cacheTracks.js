const redis = require('redis');

const client = redis.createClient(6379);

module.exports = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  client.get('toptracks', (err, data) => {
    if (err) throw err;
    if (data !== null) {
      return res.json(JSON.parse(data));
    }

    next();
  });
};
