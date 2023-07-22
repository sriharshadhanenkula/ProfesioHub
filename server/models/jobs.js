const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    email: String,
    jobTitle: String,
    jobDescription: String,
    jobLocation: String,
    jobType: String,
    jobIndustry: String,
    jobExperienceLevel: String,
    jobEducationLevel: String,
    jobSkills: String,
    jobSalary: String,
    jobCompany: String,
    jobCompanyWebsite: String,
    jobApplyBy: String,
    postedOn: String,
    applicantsCount: Number,
    applicantsEmails: Array,
  },
  {
    timestamps: true,
  }
);

const myJobSchema = mongoose.model("Job", jobSchema);

module.exports = myJobSchema;
