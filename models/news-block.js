const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsBlockSchema = new Schema ({
    title: String,
    body: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('newsBlockSchema', newsBlockSchema);