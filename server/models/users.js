const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const myUserSchema = mongoose.model("User", userSchema);

module.exports = myUserSchema;
