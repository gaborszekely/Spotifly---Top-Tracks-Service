/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const path = require('path');

const readFileAsync = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      return resolve(data.toString());
    });
  });

const appendFileAsync = (filePath, data) =>
  new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, err => {
      if (err) return reject(err);
      return resolve();
    });
  });

const appendColumnNames = (writePath, names) => {
  appendFileAsync(writePath, names.join(',') + '\n');
};

const seedArtists = async () => {
  const artistNamesPath = path.join(__dirname, './artist_names.txt');
  const writePath = path.join(__dirname, './csv/artists.csv');

  const artistNames = await readFileAsync(artistNamesPath);
  const artistNamesArr = artistNames.split(' \n');
  const { length: artistNamesLength } = artistNamesArr;

  const suffixesPath = path.join(__dirname, './suffixes.txt');
  const suffixes = await readFileAsync(suffixesPath);
  const suffixArr = suffixes.split('\n');
  const { length: suffixLength } = suffixArr;

  let count = 0;

  // Add columns
  const columnNames = ['id', 'name'];
  await appendColumnNames(writePath, columnNames);

  for (let i = 0; i < 1000; i++) {
    let artists = '';

    for (let j = 0; j < 5000; j++) {
      count += 1;

      let randArtistName = artistNamesArr[Math.floor(Math.random() * artistNamesLength)];
      let randArtistSuffix = Math.random() > 0.2 ? ' ' + suffixArr[Math.floor(Math.random() * suffixLength)] : '';
      let randArtist = randArtistName + randArtistSuffix;

      artists += count + ',' + randArtist + '\n';
    }

    await appendFileAsync(writePath, artists);
  }
};

const seedTracks = async () => {
  const writePath = path.join(__dirname, './csv/tracks.csv');

  const prefixesPath = path.join(__dirname, './prefixes.txt');
  const suffixesPath = path.join(__dirname, './suffixes.txt');
  const adjectivesPath = path.join(__dirname, './adjectives.txt');

  const prefixes = await readFileAsync(prefixesPath);
  const prefixArr = prefixes.split('\n');
  const suffixes = await readFileAsync(suffixesPath);
  const suffixArr = suffixes.split('\n');
  const adjectives = await readFileAsync(adjectivesPath);
  const adjectiveArr = adjectives.split('\n');

  const { length: prefixLength } = prefixArr;
  const { length: suffixLength } = suffixArr;
  const { length: adjectiveLength } = adjectiveArr;

  let count = 0;

  // Add columns
  const columnNames = [
    'id',
    'name',
    'image',
    'playcount',
    'length',
    'artist_id',
  ];

  await appendColumnNames(writePath, columnNames);

  for (let i = 0; i < 1000; i++) {
    let tracks = '';

    for (let j = 0; j < 5000; j++) {
      count += 1;

      let trackName =
        prefixArr[Math.floor(Math.random() * prefixLength)] +
        ' ' +
        adjectiveArr[Math.floor(Math.random() * adjectiveLength)] +
        ' ' +
        suffixArr[Math.floor(Math.random() * suffixLength)];

      let imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${Math.floor(
        Math.random() * 151
      )}`;

      let playCt = Math.ceil(Math.random() * 1000000);

      let songLength = `${Math.floor(3 + Math.random() * 3)}:${Math.floor(
        10 + Math.random() * 50
      )}`;

      let artistId = Math.ceil(Math.random() * 5000000);

      tracks +=
        count +
        ',' +
        trackName +
        ',' +
        imgURL +
        ',' +
        playCt +
        ',' +
        songLength +
        ',' +
        artistId +
        '\n';
    }

    await appendFileAsync(writePath, tracks);
  }
};

const seedCSV = () => {
  seedArtists();
  seedTracks();
};

seedCSV();

// export default seedCSV;
