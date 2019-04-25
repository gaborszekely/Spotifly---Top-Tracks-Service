DROP DATABASE IF EXISTS top_tracks;

CREATE DATABASE top_tracks;

-- ALTER USER gabor WITH PASSWORD 'gabor';

\c top_tracks

DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS artists;
-- DROP TABLE IF EXISTS artists_tracks;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

\copy artists(id, name) FROM '~/galvanize/SDC/dan-top-tracks/database/seed/csv/artists.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE tracks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(200) NOT NULL,
  playcount INTEGER NOT NULL,
  length VARCHAR(50) NOT NULL,
  artist_id INTEGER REFERENCES artists(id)
);

\copy tracks(id, name, image, playcount, length, artist_id) FROM '~/galvanize/SDC/dan-top-tracks/database/seed/csv/tracks.csv' DELIMITER ',' CSV HEADER;
