// REQUIRE DEPENDENCIES
const mongoose = require('mongoose');

// INITIALIZE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// INITIALIZE SCHEMA
const entrySchema = new Schema({
    location: String,
    date: Date,
    title: String,
    body: String,
    img: String
});

// CREATE MODEL
const Entry = mongoose.model('Entry', entrySchema);


// EXPORT OUR MODEL
module.exports = Entry;