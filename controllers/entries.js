const express = require("express");
const router = express.Router();
const Entry = require("../models/entry.js");
// const cloudinary = require('cloudinary');
// const expressFileUpload = require('express-fileupload');


//////////////////DEFINE ROUTES/////////////////

// INDEX
router.get("/", (req, res) => {
  Entry.find({}, (err, foundEntries) => {
    res.render("entries/index.ejs", {
      entries: foundEntries,
    });
  });
});



// NEW
router.get("/new", (req, res) => {
  res.render("entries/new.ejs");
});

// DELETE
router.delete("/:id", (req, res) => {
  Entry.findByIdAndDelete(req.params.id, (err, deletedEntry) => {
    res.redirect("/entries");
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Entry.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {
        new:true
      },
    (error, updatedEntry) => {
    res.redirect(`/entries/${req.params.id}`)
  });
});

// CREATE
router.post("/", (req, res) => {
// Upload to cloudinary
// 1. Move the file asset from req.files to the local system
// 2. reference the uploaded file and hand it off to cloudinary's uploaded method
// 3. Cloudinary will upload the image to the cloud
// 4. In exchange for that image we are given a secure URL
// 5. We will save the secure url in database
// const photo = req.files.img;
// photo.mv(`./uploads/${photo.name}`);
// cloudinary.uploader.upload(`./uploads/${photo.name}`).then(result =>        {
    // req.body.img = result.secure_url;
    // res.send(req.body)
    Entry.create(req.body, (err, createdEntry) => {
        res.redirect("/entries");
    });
  });
// });

// EDIT
router.get("/:id/edit", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/edit.ejs", {
      entry: foundEntry,
    });
  });
});

// SHOW
router.get("/:id", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/show.ejs", {
      entry: foundEntry,
    });
  });
});

module.exports = router;
