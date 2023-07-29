const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    email: String,
    EventTitle: String,
    EventDescription: String,
    EventLocation: String,
    EventDate: String,
    EventTime: String,
    EventLink: String,
    EventImage: String,
    EventOrganizer: String,
    EventPostedOn: String,
    EventApplicantsCount: Number,
    EventApplicantsEmails: Array,
  },
  {
    timestamps: true,
  }
);

const myEventSchema = mongoose.model("Event", eventSchema);

module.exports = myEventSchema;
