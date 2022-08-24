const express = require("express");
const path = require("path");
const router = express.Router();

//Get Routes

router.get("/", (req, res) => {
  res.render('index', {

  })
});

router.get("/pricing", (req, res) => {
  res.send("Pricing Page");
});

router.get("/services", (req, res) => {
  res.send("Pricing Page");
});

router.get("/contact", (req, res) => {
  res.send("Pricing Page");
});

//Post Routes

module.exports = router;
