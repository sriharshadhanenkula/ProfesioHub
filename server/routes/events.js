const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const eventSchema = require("../models/events");
const userAdditionalDataSchema = require("../models/userAdditionalData");
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

router.post("/registerEvent", async function (req, res, next) {
  const { email, eventId } = req.body;

  const userAdditionalData = await userAdditionalDataSchema.findOne({
    email: email,
  });
  const eventsRegistered = userAdditionalData.appliedEvents || [];

  const isUpdated = await userAdditionalDataSchema.updateOne(
    { email: email },
    {
      $set: {
        appliedEvents: [...eventsRegistered, eventId],
      },
    }
  );

  const event = await eventSchema.findOne({ _id: eventId });
  const applicantsCount = event.EventApplicantsCount || 0;
  const applicantsEmails = event.EventApplicantsEmails || [];

  const isEventUpdated = await eventSchema.updateOne(
    { _id: eventId },
    {
      $set: {
        EventApplicantsCount: applicantsCount + 1,
        EventApplicantsEmails: [...applicantsEmails, email],
      },
    }
  );

  if (isUpdated && isEventUpdated) {
    res.status(200).send("Event registered successfully");
  } else {
    res.status(203).send("Error in registering event");
  }
});

module.exports = router;
