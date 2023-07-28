var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const jobSchema = require("../models/jobs");
const userAdditionalDataSchema = require("../models/userAdditionalData");
const { use } = require("./posts");

router.post("/addJob", async function (req, res, next) {
  const {
    email,
    jobTitle,
    jobDescription,
    jobLocation,
    jobType,
    jobIndustry,
    jobExperienceLevel,
    jobEducationLevel,
    jobSkills,
    jobSalary,
    jobCompany,
    jobCompanyWebsite,
    jobApplyBy,
    postedOn,
  } = req.body;

  const myJob = await jobSchema.create({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    jobTitle: jobTitle,
    jobDescription: jobDescription,
    jobLocation: jobLocation,
    jobType: jobType,
    jobIndustry: jobIndustry,
    jobExperienceLevel: jobExperienceLevel,
    jobEducationLevel: jobEducationLevel,
    jobSkills: jobSkills,
    jobSalary: jobSalary,
    jobCompany: jobCompany,
    jobCompanyWebsite: jobCompanyWebsite,
    jobApplyBy: jobApplyBy,
    postedOn: postedOn,
    applicantsCount: 0,
    applicantsEmails: [],
  });

  if (myJob) {
    res.status(200).send("Job added successfully");
  } else {
    res.status(203).send("Error in adding job");
  }
});

router.get("/getMyJobs", async function (req, res, next) {
  const myJobs = await jobSchema.find({});
  res.status(200).send(myJobs);
});

router.post("/applyJob", async function (req, res, next) {
  const { email, jobId } = req.body;

  const userAdditionalData = await userAdditionalDataSchema.findOne({
    email: email,
  });
  const appliedJobs = userAdditionalData.appliedJobs || [];

  const isUpdated = await userAdditionalDataSchema.updateOne(
    { email: email },
    {
      $set: {
        appliedJobs: [...appliedJobs, jobId],
      },
    }
  );

  const job = await jobSchema.findOne({ _id: jobId });
  const applicantsCount = job.applicantsCount || 0;
  const applicantsEmails = job.applicantsEmails || [];

  const isJobUpdated = await jobSchema.updateOne(
    { _id: jobId },
    {
      $set: {
        applicantsCount: applicantsCount + 1,
        applicantsEmails: [...applicantsEmails, email],
      },
    }
  );

  if (isUpdated && isJobUpdated) {
    res.status(200).send("Job applied successfully");
  } else {
    res.status(203).send("Error in applying job");
  }
});

module.exports = router;
