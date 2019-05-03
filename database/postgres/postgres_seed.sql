-- COPY artists(id, name)
-- FROM STDIN DELIMITER ',' CSV HEADER <
-- /home/gabor/galvanize/SDC/dan-top-tracks/database/postgres/seed/csv/artists.csv;

"COPY artists(id, name) FROM STDIN DELIMITER ',' CSV HEADER" < /home/gabor/galvanize/SDC/dan-top-tracks/database/postgres/seed/csv/artists.csv;
-- /copy
"COPY tracks(id, name, image, playcount, length, artist_id) FROM STDIN DELIMITER ',' CSV HEADER" < ~/galvanize/SDC/dan-top-tracks/database/postgres/seed/csv/tracks.csv;


-- FROM '~/galvanize/SDC/dan-top-tracks/database/postgres/seed/csv/tracks.csv' DELIMITER ',' CSV HEADER;