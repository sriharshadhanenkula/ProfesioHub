const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    email: String,
    content: String,
    image: String,
    likes: Number,
    comments: Number,
    shares: Number,
  },
  {
    timestamps: true,
  }
);

const myPostSchema = mongoose.model("Post", postSchema);

module.exports = myPostSchema;
