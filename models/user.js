// REQUIRE DEPENDENCIES
const mongoose = require('mongoose');

// INITIALIZE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// INITIALIZE SCHEMA
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

// CREATE MODEL
const User = mongoose.model('User', userSchema);

// EXPORT OUR MODEL
module.exports = User;