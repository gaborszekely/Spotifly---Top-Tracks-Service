const redis = require('redis');

const defaultConnection = 'redis://gabe-sdc-redis.guujxr.0001.use2.cache.amazonaws.com:6379';
const client = redis.createClient(process.env.REDIS_URL || defaultConnection);

module.exports = client;
