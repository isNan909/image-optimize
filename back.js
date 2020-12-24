const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let directory_name = 'images';

let filenames = fs.readdirSync(directory_name);

filenames.forEach((file) => {
  const fileFormat = getExtension(file);
  console.log(file, fileFormat);
  if (fileFormat === 'jpg') {
    sharp(file)
      .jpeg({
        quality: 80,
      })
      .toFile(file, function (err, info) {
        console.log(info);
        if (err) {
          console.log('error in image optimization');
          return;
        }
      });
  } else if (fileFormat === 'jpeg') {
    sharp(file)
      .jpeg({
        quality: 80,
      })
      .toFile(file, function (err, info) {
        console.log(info);
        if (err) {
          console.log('error in image optimization');
          return;
        }
      });
  } else if (fileFormat === 'png') {
    sharp(file)
      .png({
        quality: 80,
      })
      .toFile(file, function (err, info) {
        console.log(info);
        if (err) {
          console.log('error in image optimization');
          return;
        }
      });
  } else if (fileFormat === 'svg') {
    sharp(file).toFile(file, function (err, info) {
      console.log(info);
      if (err) {
        console.log('error in image optimization');
        return;
      }
    });
  }
});

function getExtension(filename) {
  var ext = path.extname(filename || '').split('.');
  return ext[ext.length - 1];
}



// sharp('./images/' + file)
// .jpeg({ quality: 10 })
// .toFile(('output/' + file), function (err, info) {
//   console.log(info);
//   if (err) {
//     console.log('error in image optimization');
//     return;
//   }
// });



// const fs = require('fs');
// const path = require('path');
// const sharp = require('sharp');

// let directory_name = 'images';

// let filenames = fs.readdirSync(directory_name);

// filenames.forEach((file) => {
//   const fileFormat = getExtension(file);
//   console.log(file, fileFormat);
//   if (fileFormat === 'svg') {
//     console.log('svg not processed');
//     return;
//   }
//   let sh = sharp('./images/' + file);
//   if (fileFormat === 'jpg') {
//     sh = sh.jpeg({ quality: 80 });
//   } else if (fileFormat === 'png') {
//     sh = sh.png({ quality: 80 });
//   }

//   sh.toFile('output/' + file, function (err, info) {
//     console.log(info);
//     if (err) {
//       console.log('error in image optimization');
//       return;
//     }
//   });
// });

// function getExtension(filename) {
//   var ext = path.extname(filename || '').split('.');
//   return ext[ext.length - 1];
// }
