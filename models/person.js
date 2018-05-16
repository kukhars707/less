const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const persone = new Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true},
    link: {type: String, required: true},
    image: { type: String, required: true }
});

module.exports = mongoose.model('persone', persone);