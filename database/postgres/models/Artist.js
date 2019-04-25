const Sequelize = require('sequelize');
const sequelize = require('../db');

// const Artist = sequelize.define('artist', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// export default Artist;

const { Model } = Sequelize;

class Artist extends Model {}

Artist.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'artist',
    timestamps: false,
    underscored: true,
  }
);

module.exports = Artist;
