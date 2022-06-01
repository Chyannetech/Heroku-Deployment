// REQUIRE DEPENDENCIES
const mongoose = require('mongoose');

// INITIALIZE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// INITIALIZE SCHEMA
const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: String
});

// CREATE MODEL
const Img = mongoose.model('Img', imgSchema);

// EXPORT OUR MODEL
module.exports = Entry;