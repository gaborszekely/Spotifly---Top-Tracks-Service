const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  playcount: {
    type: Number,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  artist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'artist',
  },
});

module.exports = mongoose.model('track', trackSchema);
