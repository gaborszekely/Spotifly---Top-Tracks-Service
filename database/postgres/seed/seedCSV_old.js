/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const path = require('path');

const readFileAsync = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      resolve(data.toString());
    });
  });

const appendFileAsync = (filePath, data) =>
  new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, err => {
      if (err) return reject(err);
      resolve();
    });
  });

const appendColumnNames = (writePath, names) => {
  appendFileAsync(writePath, names.join(',') + '\n');
}

const seedCSV = async () => {
  const readPath = path.join(__dirname, './artist_names.txt');
  const writePath = path.join(__dirname, './csv/top_tracks.csv');

  const prefixes = [
    'Flaming',
    'Black',
    'Talking',
    'Broken',
    'Ashen',
    'Rainbow',
    'Wandering',
    'Lost',
    'Breathing',
    'Rough',
    'Rolling',
    'Thundering',
    'Hipster',
    'Punk',
    'Goth',
    'White',
    'Pale',
    'Lunar',
    'Mystic',
    'Screaming',
    'Sexy',
    'Diabolical',
    'Evil',
    'Thumping',
    'Ascending',
    'Falling',
    'Spinning',
    'Drooling',
    'Secret',
    'Mad',
    'Hot',
    'Veiled',
    'Hidden',
    'Psychic',
    'Nightly',
    'Eerie',
    'Transparent',
    'Wild',
    'Smashing',
    'Chunking',
    'Guns and',
    "Roamin' ",
    'Grummel',
    'Schwifty',
    'Stylish',
    'Creepy',
    'Nerdy',
    'Anti',
    'Panoramic',
    'McShizzle',
    'Pensive',
    'Crushing',
    "Dead Man's",
    'Lords of',
    'Burnt',
    'Wheeled',
    'Living',
    'Azure',
    'Undead',
    'Exploding',
    'Spiralling',
    'Boom-boom',
    'Serious',
    'Stoic',
    'Deep',
    'Somber',
    'Squirming',
    'Vanilla',
    'Screeching',
    'Thrashing',
    'Selective',
    'Swift',
    'Soaring',
    'Mighty',
  ]; // 74

  const suffixes = [
    'Flames',
    'Banisters',
    'Skulls',
    'Unicorns',
    'Souls',
    'Corpses',
    'Flannel',
    'Zombies',
    'Lampshades',
    'Scientists',
    'Ghosts',
    'Dude and His Merry Gang of Band Nerds',
    'Hunters',
    'Sirens',
    'Lozenges',
    'Stones',
    'Heads',
    'Hands',
    'Cerulean',
    'Lightning',
    'Blades',
    'Gang',
    'Homeboys',
    'Critics',
    'Emos',
    'Rebels',
    'Pirates',
    'Pumpkins',
    'Roses',
    'Demons',
    'Tractors',
    'Men',
    'Gals',
    'Riders',
    'Ray-Bans',
    'Trenchcoats',
    'Creepers',
    'Gravity',
    'Diamonds',
    'Mirrors',
    'Jefes',
    'Esperantos',
    'Crimson',
    'Wrappers',
    'José y los gauchos',
    'Heat',
    'Fever',
    'Wave',
    'Spell',
    'Spectacle',
    'Voices',
    'Group',
    'Fliers',
    'Homies',
    'Rum',
    'Wheels',
    'Brits',
    'Machines',
    'Assassination',
    'Flint',
    'Noises',
    'Perspiration',
    'Perpetrator',
    'Betrayed',
    'Wasslers',
    'Whirlpool',
    'Pistols',
    'Boulders',
    'Trinkets',
    'Rag Dolls',
    'Bazookas',
    'Popsicle',
    'Ice Cubes',
    'Banshees',
    'Frost',
    'Darkness',
    'Beat',
    'Freeze',
    'Kittens',
    'Superheroes',
    'Bagel',
    'Flaxseeds',
    'Children',
    'Love',
    'Equinox',
    'Life',
  ]; // 86

  const data = await readFileAsync(readPath);
  const artistNames = data.split(' \n');

  // let count = 0;

  // Add columns
  const columnNames = ['name', 'artist', 'image', 'playcount', 'length'];
  await appendFileAsync(writePath, columnNames.join(','));

  for (let i = 0; i < 1000; i++) {
    let artists = '';

    for (let j = 0; j < 10000; j++) {
      // count += 1;

      let randArtist = artistNames[Math.floor(Math.random() * 10000)];
      let trackName =
        prefixes[Math.floor(Math.random() * 74)] +
        ' ' +
        suffixes[Math.floor(Math.random() * 86)];
      let imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${Math.floor(
        Math.random() * 151
      )}`;
      let playCt = Math.floor(Math.random() * 500);
      let songLength = `${Math.floor(3 + Math.random() * 3)}:${Math.floor(
        10 + Math.random() * 50
      )}`;

      artists +=
        trackName +
        ', ' +
        randArtist +
        ', ' +
        imgURL +
        ', ' +
        playCt +
        ', ' +
        songLength +
        '\n';
    }

    await appendFileAsync(writePath, artists);
  }
};

const seedArtists = async () => {
  const readPath = path.join(__dirname, './artist_names.txt');
  const writePath = path.join(__dirname, './csv/artists.csv');

  const data = await readFileAsync(readPath);
  const artistNames = data.split(' \n');
  const { length } = artistNames;

  let count = 0;

  // Add columns
  const columnNames = ['id', 'name'];
  await appendColumnNames(writePath, columnNames);

  for (let i = 0; i < 1000; i++) {
    let artists = '';

    for (let j = 0; j < 3000; j++) {
      count += 1;

      let randArtist = artistNames[Math.floor(Math.random() * length)];
      artists += count + ',' + randArtist + '\n';
    }

    await appendFileAsync(writePath, artists);
  }
};

const seedTracks = async () => {
  const writePath = path.join(__dirname, './csv/tracks.csv');

  const prefixes = [
    'Flaming',
    'Black',
    'Talking',
    'Broken',
    'Ashen',
    'Rainbow',
    'Wandering',
    'Lost',
    'Breathing',
    'Rough',
    'Rolling',
    'Thundering',
    'Hipster',
    'Punk',
    'Goth',
    'White',
    'Pale',
    'Lunar',
    'Mystic',
    'Screaming',
    'Sexy',
    'Diabolical',
    'Evil',
    'Thumping',
    'Ascending',
    'Falling',
    'Spinning',
    'Drooling',
    'Secret',
    'Mad',
    'Hot',
    'Veiled',
    'Hidden',
    'Psychic',
    'Nightly',
    'Eerie',
    'Transparent',
    'Wild',
    'Smashing',
    'Chunking',
    'Guns and',
    "Roamin' ",
    'Grummel',
    'Schwifty',
    'Stylish',
    'Creepy',
    'Nerdy',
    'Anti',
    'Panoramic',
    'McShizzle',
    'Pensive',
    'Crushing',
    "Dead Man's",
    'Lords of',
    'Burnt',
    'Wheeled',
    'Living',
    'Azure',
    'Undead',
    'Exploding',
    'Spiralling',
    'Boom-boom',
    'Serious',
    'Stoic',
    'Deep',
    'Somber',
    'Squirming',
    'Vanilla',
    'Screeching',
    'Thrashing',
    'Selective',
    'Swift',
    'Soaring',
    'Mighty',
  ];

  const { length: prefixLength } = prefixes;

  const suffixes = [
    'Flames',
    'Banisters',
    'Skulls',
    'Unicorns',
    'Souls',
    'Corpses',
    'Flannel',
    'Zombies',
    'Lampshades',
    'Scientists',
    'Ghosts',
    'Dude and His Merry Gang of Band Nerds',
    'Hunters',
    'Sirens',
    'Lozenges',
    'Stones',
    'Heads',
    'Hands',
    'Cerulean',
    'Lightning',
    'Blades',
    'Gang',
    'Homeboys',
    'Critics',
    'Emos',
    'Rebels',
    'Pirates',
    'Pumpkins',
    'Roses',
    'Demons',
    'Tractors',
    'Men',
    'Gals',
    'Riders',
    'Ray-Bans',
    'Trenchcoats',
    'Creepers',
    'Gravity',
    'Diamonds',
    'Mirrors',
    'Jefes',
    'Esperantos',
    'Crimson',
    'Wrappers',
    'José y los gauchos',
    'Heat',
    'Fever',
    'Wave',
    'Spell',
    'Spectacle',
    'Voices',
    'Group',
    'Fliers',
    'Homies',
    'Rum',
    'Wheels',
    'Brits',
    'Machines',
    'Assassination',
    'Flint',
    'Noises',
    'Perspiration',
    'Perpetrator',
    'Betrayed',
    'Wasslers',
    'Whirlpool',
    'Pistols',
    'Boulders',
    'Trinkets',
    'Rag Dolls',
    'Bazookas',
    'Popsicle',
    'Ice Cubes',
    'Banshees',
    'Frost',
    'Darkness',
    'Beat',
    'Freeze',
    'Kittens',
    'Superheroes',
    'Bagel',
    'Flaxseeds',
    'Children',
    'Love',
    'Equinox',
    'Life',
  ];

  const { length: suffixLength } = suffixes;

  let count = 0;

  // Add columns
  const columnNames = ['id', 'name', 'image', 'playcount', 'length'];

  await appendColumnNames(writePath, columnNames);

  for (let i = 0; i < 1000; i++) {
    let tracks = '';

    for (let j = 0; j < 3000; j++) {
      count += 1;

      let trackName =
        prefixes[Math.floor(Math.random() * prefixLength)] +
        ' ' +
        suffixes[Math.floor(Math.random() * suffixLength)];

      let imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${Math.floor(
        Math.random() * 151
      )}`;

      let playCt = Math.floor(Math.random() * 1000000000);

      let songLength = `${Math.floor(3 + Math.random() * 3)}:${Math.floor(
        10 + Math.random() * 50
      )}`;

      tracks += count
        + ','
        + trackName
        + ','
        + imgURL
        + ','
        + playCt
        + ','
        + songLength
        + '\n';
    }

    await appendFileAsync(writePath, tracks);
  }
};

const seedJoinTable = async () => {
  const writePath = path.join(__dirname, './csv/artists_tracks.csv');

  // Add columns
  const columnNames = ['artist_id', 'track_id'];
  await appendColumnNames(writePath, columnNames);

  for (let i = 0; i < 1000; i++) {
    let joins = '';

    for (let j = 0; j < 4000; j++) {
      let artistId = Math.ceil(Math.random() * 3000000);
      let trackId = Math.ceil(Math.random() * 3000000);
      joins += artistId + ',' + trackId + '\n';
    }

    await appendFileAsync(writePath, joins);
  }
};

const seedCSV2 = () => {
  seedArtists();
  seedTracks();
  seedJoinTable();
};

seedCSV2();

// export default seedCSV;
