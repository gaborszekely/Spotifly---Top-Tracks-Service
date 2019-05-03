/* eslint-disable operator-linebreak */
const Sequelize = require('sequelize');

const defaultDB = 'postgres';
const defaultUser = 'postgres';
const defaultPassword = 'postgres';
const defaultHost =
  'sdc-top-tracks-db.cqntc3qfxm9a.us-east-2.rds.amazonaws.com';

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB || defaultDB,
  username: process.env.POSTGRES_USER || defaultUser,
  password: process.env.POSTGRES_PASSWORD || defaultPassword,
  host: process.env.POSTGRES_HOST || defaultHost,
  dialect: 'postgres',
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

/*
  // `postgresql://${process.env.POSTGRES_USER}:${
  //   process.env.POSTGRES_PASSWORD
  // }@postgres/${process.env.POSTGRES_DB}`
  // `${process.env.PSQL_CONNECTION}`
  // 'sdc-top-tracks-db.cqntc3qfxm9a.us-east-2.rds.amazonaws.com'
*/
