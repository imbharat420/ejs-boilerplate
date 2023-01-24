const multer = require("multer")
const path = require('path') 
const fs = require('fs')


var config = multer.diskStorage({
  limits: 500000,
  inMemory: true,
  destination: function (req, file, cb) {
    const location = `./images`
    fs.mkdirSync(location, { recursive: true });
    cb(null, location);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var fileUpload = multer({ storage: config });

module.exports = fileUpload