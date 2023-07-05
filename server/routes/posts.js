var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const postSchema = require("../models/posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/addPost", async function (req, res, next) {
  const { email, content, url, likes, comments, shares } = req.body;

  const myPost = await postSchema.create({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    content: content,
    image: url,
    likes: likes,
    comments: comments,
    shares: shares,
  });

  res.status(201).send("Post added successfully");
});

router.get("/getAllPosts", async function (req, res, next) {
  const posts = await postSchema.find({});
  res.status(200).send(posts);
});

module.exports = router;
