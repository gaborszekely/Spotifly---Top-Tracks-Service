/* eslint-disable no-param-reassign */

// For tracks
module.exports = doc => {
  doc._id = doc.id;
  delete doc.id;
  doc.playcount = parseInt(doc.playcount, 10);
  return doc;
};

// // For artists
// module.exports = doc => {
//   doc._id = doc.id;
//   delete doc.id;
//   return doc;
// };
