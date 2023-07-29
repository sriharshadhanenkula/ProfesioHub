import React from "react";
import { Container } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

function myJobItems(job) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            border: "1px solid #e5e5e5",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={faker.image.avatar()}
                alt="job-item-img"
                style={{
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  marginRight: "14px",
                }}
              />
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0f71a6",
                  marginBottom: "8px",
                  fontFamily: "open sans",
                }}
              >
                {job.jobTitle}
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                }}
              >
                {job.jobCompany}
              </Typography>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px",
            }}
          >
            <div>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  // color: "#3a3b3a",
                  fontFamily: "open sans",
                  textAlign: "center",
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                }}
              >
                {job.jobLocation}
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  // color: "#3a3b3a",
                  fontFamily: "open sans",
                  textAlign: "center",
                }}
              >
                Pay
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                }}
              >
                {job.jobSalary}
              </Typography>
            </div>
            <Link
              to="/jobs"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#0f71a6",
                  fontFamily: "open sans",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                View Job
                <OpenInNewIcon
                  style={{ fontSize: "16px", marginLeft: "5px" }}
                />
              </Typography>
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function displayJobsApplied(allJobs, email) {
  const appliedJobs = allJobs.filter((job) => {
    return job.applicantsEmails && job.applicantsEmails.includes(email);
  });

  return (
    <Container
      style={{ height: "81vh", overflowY: "scroll", paddingTop: "10px" }}
    >
      <h1
        style={{
          color: "#0f71a6",
          fontWeight: "600",
          fontSize: "26px",
          fontFamily: "open sans",
          marginBottom: "15px",
        }}
      >
        Jobs Applied
      </h1>

      {appliedJobs.map((job) => myJobItems(job))}
    </Container>
  );
}

export function displayBookmarkJobs(allJobs, email, myUserAdditionalData) {
  const bookmarkedJobs = allJobs.filter((job) => {
    return (
      myUserAdditionalData.jobBookmarks &&
      myUserAdditionalData.jobBookmarks.includes(job._id)
    );
  });

  return (
    <Container
      style={{ height: "81vh", overflowY: "scroll", paddingTop: "10px" }}
    >
      <h1
        style={{
          color: "#0f71a6",
          fontWeight: "600",
          fontSize: "26px",
          fontFamily: "open sans",
          marginBottom: "15px",
        }}
      >
        Bookmarked Jobs
      </h1>
      {bookmarkedJobs.map((job) => myJobItems(job))}
    </Container>
  );
}
