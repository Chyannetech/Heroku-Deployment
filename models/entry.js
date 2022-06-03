// REQUIRES DEPENDENCIES
const mongoose = require('mongoose');

// INITIALIZES SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// INITIALIZES SCHEMA
const entrySchema = new Schema({
    location: String,
    date: Date,
    title: String,
    body: String,
    img: String
});

// CREATES MODEL
const Entry = mongoose.model('Entry', entrySchema);


// EXPORT OUR MODEL
module.exports = Entry;