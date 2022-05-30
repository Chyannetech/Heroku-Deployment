const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const Entry = require('../models/entry.js');

router.post('/', (req, res) => {
    // Entry.create(req.body, (err, createdEntry) => {
    //     res.redirect('/entries');
    // });
    res.send("recieved");
});


module.exports = router;