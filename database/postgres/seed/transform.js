const fs = require('fs');
const path = require('path');

const readFileAsync = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      resolve(data.toString());
    });
  });

// fs.readFile(path.join(__dirname, './artist_names.txt'), (err, data) => {});
(async () => {
  const data = await readFileAsync(path.join(__dirname, './artist_names.txt'));
  console.log(data.split(' \n')[971]);
})();

// readFileAsync(path.join(__dirname, './artist_names.txt'))
//   .then(data => {
//     const transformed = data.split(' \n');
//     fs.writeFile(path.join(__dirname, './artists_transformed.txt'), data, (err) => {
//       if(err) {

//       }
//     })
//   });
