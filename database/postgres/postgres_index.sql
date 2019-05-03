CREATE INDEX artist_id_index
ON tracks(artist_id);

CREATE INDEX playcount_index 
ON tracks(playcount);

ALTER TABLE tracks
ADD FOREIGN KEY (artist_id) REFERENCES artists (id);