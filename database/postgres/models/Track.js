const Sequelize = require('sequelize');
const sequelize = require('../db');
const Artist = require('./Artist');

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

// Track.hasMany(Artist, {
//   foreignKey: {
//     name: 'artist_id',
//     allowNull: false,
//   },
// });

// export default Track;

const { Model } = Sequelize;

class Track extends Model {}

Track.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    playcount: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    length: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    artist_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'track',
    timestamps: false,
    underscored: true,
  }
);

Track.belongsTo(Artist, { foreignKey: 'artist_id' });

module.exports = Track;
