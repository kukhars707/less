const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsBlockSchema = new Schema ({
    title: { type: String, required: true },
    link: {type: String, required: true},
    body: { type:String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('newsBlockSchema', newsBlockSchema);