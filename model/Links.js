const mongoose = require('mongoose');
const shortId = require('shortid');

const Links = mongoose.Schema({
    longlink: {
        type: String,
        required: true
    },
    shortlink: {
        type: String,
        default: shortId.generate
    }
});

module.exports = mongoose.model('links', Links);