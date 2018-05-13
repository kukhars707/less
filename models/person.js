const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const persone = new Schema ({
    title: String,
    body: String,
    image: String
});

module.exports = mongoose.model('persone', persone);