var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});
// resize and remove EXIF profile data 
// gm('./a.jpg')
// .label(1)
// .resizeExact(400, 100)
// .write('./b.jpg', function (err) {
//   if (!err) 
//     console.log('done');
//   else 
//     console.log(err)
// });

gm('./a.jpg')
.font("Helvetica.ttf", 150)
.drawText(120, 350, "10000000")
// .label('1')
.write('./b.jpg', function (err) {
  if (!err) console.log('done');
});