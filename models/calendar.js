const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendar = new Schema ({
    title: { type: String, required: true },
    link: {type: String, required: true},
    body: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('calendar', calendar);