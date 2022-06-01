// CONNECTS HIDDEN .ENV FILE
require('dotenv').config()

// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const entriesController = require('./controllers/entries.js');
const usersController = require('./controllers/users.js');
const cloudinary = require('cloudinary');
const expressFileUpload = require('express-fileupload');



// ALLOWS HEROKU'S PORT OR LOCAL PORT
// const PORT = process.env.PORT || 3000;
const { PORT = 3000, API_KEY, API_SECRET, CLOUD_NAME } = process.env;

// MONGODB DATABASE CONNECTION
const DATABASE_URL = "mongodb+srv://admin:abc1234@cluster0.b8vyj.mongodb.net/travelmoire?retryWrites=true&w=majority";

// DATABASE CONNECTION VIA HEROKU OR LOCALLY
const MONGODB_URI = process.env.MONGODB_URI;

// CONNECT TO MONGO AND FIX DEPRECIATION WARNINGS FROM MONGOOSE
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true }
);

// DATABASE CONNECTION ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

// CLOUDINARY MIDDLEWARE
cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET 
});

// FILE UPLOAD MIDDLEWARE
app.use(expressFileUpload({createParentPath: true}));

// MIDDLEWARE AND BODYPARSER
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use('/entries', entriesController);
app.use('/users', usersController);




// ADDS MIDDLEWARE FOR SERVING STATIC FILES TO EXPRESS
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

// USES METHOD OVERRIDE
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// HOME PAGE ROUTE
app.get('/' , (req, res) => {
  res.render('index.ejs');
});



// LISTENER
app.listen(PORT, () => console.log('express is listening on:', PORT));

