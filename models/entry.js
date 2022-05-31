// REQUIRE DEPENDENCIES
const mongoose = require('mongoose');

// INITIALIZE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// INITIALIZE SCHEMA
const entrySchema = new Schema({
    title: String,
    body: String,
    image: String
})

// CREATE MODEL
const Entry = mongoose.model('Entry', entrySchema);

// EXPORT OUR MODEL
module.exports = Entry;