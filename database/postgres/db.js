const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('top_tracks', 'gabor', 'gabor', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// const { Model } = Sequelize;

// // class Artist extends Model {}

// // Artist.init(
// //   {
// //     // attributes
// //     name: {
// //       type: Sequelize.STRING,
// //       allowNull: false,
// //     },
// //   },
// //   {
// //     sequelize,
// //     modelName: 'artist',
// //     // options
// //   }
// // );

// const Artist = sequelize.define('artist', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// const Track = sequelize.define('track', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   image: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   playcount: {
//     type: Sequelize.NUMBER,
//     allowNull: false,
//   },
//   length: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// // class Track extends Model {}

// // Track.init(
// //   {
// //     // attributes
// //     name: {
// //       type: Sequelize.STRING,
// //       allowNull: false,
// //     },
// //     image: {
// //       type: Sequelize.STRING,
// //       allowNull: false,
// //     },
// //     playcount: {
// //       type: Sequelize.NUMBER,
// //       allowNull: false,
// //     },
// //     length: {
// //       type: Sequelize.STRING,
// //       allowNull: false,
// //     },
// //   },
// //   {
// //     sequelize,
// //     modelName: 'track',
// //     // options
// //   }
// // );

// Artist.belongsToMany(Track, { through: 'ArtistTrack' });
// Track.belongsToMany(Artist, { through: 'ArtistTrack' });

// Artist.sync()
//   .then(() => Artist.create({ name: 'test 2' }))
//   .then(artist => {
//     // you can now access the newly created task via the variable task
//     console.log('ARTIST ', artist);
//   });

module.exports = sequelize;
