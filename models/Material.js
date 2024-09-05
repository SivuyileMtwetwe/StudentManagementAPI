const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    postedBy: { type: String, required: true },
    datePosted: { type: Date, default: Date.now }
});

const Material = mongoose.model('Material', MaterialSchema);
module.exports = Material;
