const mongoose = require("mongoose");

const userAdditionalDataSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    email: String,
    bookmarks: Array,
    about: String,
  },
  {
    timestamps: true,
  }
);

const myUserAdditionalDataSchema = mongoose.model(
  "UserAdditionalData",
  userAdditionalDataSchema
);

module.exports = myUserAdditionalDataSchema;
