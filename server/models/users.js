const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    profilePicture: String,
    email: String,
    password: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    role: String,
    university: String,
    startMonth: String,
    startYear: String,
    endMonth: String,
    endYear: String,
  },
  {
    timestamps: true,
  }
);

const myUserSchema = mongoose.model("User", userSchema);

module.exports = myUserSchema;
