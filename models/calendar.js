const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendar = new Schema ({
    title: String,
    body: String,
    date: String,
    location: String
});

module.exports = mongoose.model('calendar', calendar);