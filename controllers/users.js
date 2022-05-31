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
  
  
  // UPDATE
 
  
  // CREATE
  router.post("/", (req, res) => {
    User.create(req.body, (err, createdUser) => {
      res.redirect("/users");
    });
  });
  
  // EDIT
  
  
  // SHOW
  router.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
      res.render("users/show.ejs", {
        user: foundUser,
      });
    });
  });
  
  module.exports = router;