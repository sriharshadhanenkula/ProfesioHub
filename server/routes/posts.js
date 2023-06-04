var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const postSchema = require("../models/posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/addPost", async function (req, res, next) {
  const { email, content } = req.body;

  const myPost = await postSchema.create({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    content: content,
    image: "",
    likes: 0,
    comments: 0,
    shares: 0,
  });

  res.status(201).send("Post added successfully");
});

module.exports = router;
