var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../models/users");
const { use } = require("./posts");

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
    const myData = {
      message: "",
      email: isPresent.email,
    };
    if (isPresent.password === password) {
      myData.message = "Login successful";
      res.status(200).send(myData);
    } else {
      myData.message = "Incorrect password";
      res.status(200).send(myData);
    }
  } else {
    res.status(203).send("User not found");
  }
});

router.post("/getUserDetails", async function (req, res, next) {
  const { email } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    res.status(200).send(isPresent);
  } else {
    res.status(203).send("User not found");
  }
});

module.exports = router;
