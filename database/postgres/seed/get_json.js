const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const client = new Client({
  user: 'gabor',
  host: 'localhost',
  database: 'top_tracks',
  password: 'gabor',
  port: 5432,
});

client.connect();

client.query('SELECT json_agg(t) FROM (SELECT * FROM tracks) t', (err, res) => {
  if (err) {
    console.error('Could not fetch JSON data');
    return;
  }
  fs.writeFile(
    path.join(__dirname, './JSON_TRACKS.json'),
    JSON.stringify(res.rows[0].json_agg),
    err2 => {
      if (err2) {
        console.error('Could not write to file!');
      }

      client.end();
    }
  );
});
