var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../models/users");
const { use } = require(".");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async function (req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    res.status(203).send("User already exists");
  } else {
    const user = await userSchema.create({
      _id: new mongoose.Types.ObjectId(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    if (user) {
      res.status(201).send("Account created successfully");
    } else {
      res.status(500).send("Error in creating account");
    }
  }
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    if (isPresent.password === password) {
      res.status(200).send("Login successful");
    } else {
      res.status(200).send("Incorrect password");
    }
  } else {
    res.status(203).send("User not found");
  }
});

module.exports = router;
