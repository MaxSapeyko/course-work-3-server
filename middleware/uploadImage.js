const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/');
  },
  filename: function (req, file, cb) {
    cb(null, file);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

module.exports = upload;
