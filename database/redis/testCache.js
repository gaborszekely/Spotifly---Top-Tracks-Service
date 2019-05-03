const client = require('./index');

module.exports = (req, res, next) => {
  client.get('test', (err, data) => {
    if (err) throw err;
    if (data !== null) {
      const cacheData = JSON.parse(data);
      return res.json(cacheData);
    }

    next();
  });
};
