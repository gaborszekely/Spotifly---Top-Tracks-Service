const nano = require('nano')('http://admin:gabor@localhost:5984');

// eslint-disable-next-line consistent-return
const testCouch = async () => {
  try {
    // await nano.db.destroy('artists');
    // await nano.db.destroy('tracks');

    // await nano.db.create('artists');
    // await nano.db.create('tracks');

    const tracks = nano.use('tracks');
    const artists = nano.use('artists');

    const track = await tracks.get('10002');
    const artist = await artists.get(track.artist_id);

    console.log(artist);

    // tracks.list({ limit: 10 }).then(list => {
    //   list.rows.forEach(async row => {
    //     const obj = '';
    //     const track = await tracks.get(row.key);
    //     const artist = await artists.get(track.artist_id);
    //   });
    // });
  } catch (err) {
    console.error(err);
    return null;
  }
};

testCouch();
