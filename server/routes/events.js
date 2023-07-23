const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const eventSchema = require("../models/events");
const { use } = require("./posts");

router.post("/addEvent", async function (req, res, next) {
  const {
    email,
    eventName,
    eventDescription,
    eventDate,
    eventTime,
    eventLocation,
    eventLink,
    eventOrganizer,
    eventImage,
  } = req.body;
  const newEvent = await eventSchema.create({
    _id: new mongoose.Types.ObjectId(),
    EventTitle: eventName,
    EventDescription: eventDescription,
    EventLocation: eventLocation,
    EventDate: eventDate,
    EventTime: eventTime,
    EventLink: eventLink,
    EventImage: eventImage,
    EventOrganizer: eventOrganizer,
    EventPostedOn: new Date().toLocaleString(),
    EventApplicantsCount: 0,
    EventApplicantsEmails: [],
  });

  if (newEvent) {
    res.status(200).send("Event added successfully");
  } else {
    res.status(203).send("Error in adding event");
  }
});

router.get("/getAllEvents", async function (req, res, next) {
  const allEvents = await eventSchema.find({});
  res.status(200).send(allEvents);
});

module.exports = router;
