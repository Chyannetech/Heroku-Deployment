const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const User = require("../models/user.js");


// INDEX
router.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
      res.render("users/index.ejs", {
        users: foundUsers,
      });
    });
  });
  
  // NEW
  router.get("/new", (req, res) => {
    res.render("users/new.ejs");
  });
  
  // DELETE
  router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, userEntry) => {
      res.redirect("/users");
    });
  });
  
  
  // UPDATE
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(
        req.params.id, 
        req.body, {
            new: true,
        },
        (err, updatedEntry) => {
      res.redirect(`/users/${req.params.id}`);
    })
  });
 
  
  // CREATE
  router.post("/", (req, res) => {
    User.create(req.body, (err, createdUser) => {
      res.redirect("/users/show.ejs");
    });
  });
  
  // EDIT
router.get("/:id/edit", (req, res) => {
    User.findById(req.params.id, (error, foundUser) => {
      res.render("users/edit.ejs", {
        user: foundUser,
      });
    });
  });
  
  
  // SHOW
  router.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
      res.render("users/show.ejs", {
        user: foundUser,
      });
    });
  });
  
  module.exports = router;