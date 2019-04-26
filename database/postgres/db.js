const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('top_tracks', 'gabor', 'gabor', {
  host: 'localhost',
  dialect: 'postgres',
  // pool configuration used to pool database connections
  // pool: {
  //   max: 20,
  //   idle: 30000,
  //   acquire: 60000,
  // },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to Postgres successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
