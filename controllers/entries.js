const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const Entry = require("../models/entry.js");

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
  Entry.findByIdAndDelete(req.params.id, () => {
    res.redirect("/entries");
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/entries");
  });
});

// CREATE
router.post("/", (req, res) => {
  Entry.create(req.body, (err, createdEntry) => {
    res.redirect("/entries");
  });
});

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
