const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.doc' && ext !== '.docx' && ext !== '.jpg') {
            return cb(new Error('Only .pdf, .doc, .docx, and .jpg files are allowed'));
        }
        cb(null, true);
    }
});

module.exports = upload;
