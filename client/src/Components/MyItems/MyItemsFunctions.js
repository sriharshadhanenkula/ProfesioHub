import * as React from "react";
import { Container } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

function myJobItems(job) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Accordion
        sx={{
          "&:hover": {
            backgroundColor: "#e4f0f7",
            cursor: "pointer",
          },
        }}
      >
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

function myEventItems(event) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Accordion
        sx={{
          "&:hover": {
            backgroundColor: "#e4f0f7",
            cursor: "pointer",
          },
        }}
      >
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
                src={event.EventImage}
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
                {event.EventTitle}
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
                {event.EventOrganizer}
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
            <div style={{ width: "35%" }}>
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
                  textAlign: "center",
                }}
              >
                {event.EventLocation}
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
                Date & Time
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                }}
              >
                {event.EventDate} {event.EventTime}
              </Typography>
            </div>
            <Link
              to="/events"
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
                View Event
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

export function DisplayEachApplicant(props) {
  const { applicantEmail } = props;
  const [applicantDetails, setApplicantDetails] = useState({});

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      email: applicantEmail,
    };

    axios
      .post("http://localhost:5000/users/getUserDetails", data, config)
      .then((res) => {
        if (res.status === 200) {
          setApplicantDetails(res.data);
        }
      });
  }, [applicantEmail]);

  return (
    <TableRow>
      <TableCell sx={{ fontFamily: "open sans" }} align="left">
        {applicantDetails.firstName}
      </TableCell>
      <TableCell sx={{ fontFamily: "open sans" }} align="left">
        {applicantDetails.lastName}
      </TableCell>
      <TableCell sx={{ fontFamily: "open sans" }} align="left">
        {applicantEmail}
      </TableCell>
      <TableCell align="left">
        <Button
          variant="outlined"
          style={{
            fontFamily: "open sans",
            fontWeight: "600",
            fontSize: "10px",
            textTransform: "capitalize",
          }}
        >
          view Profile
        </Button>
      </TableCell>
    </TableRow>
  );
}

function myPostedJobItems(job) {
  return (
    <div style={{ marginBottom: "10px" }}>
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
        <AccordionDetails>
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
                Posted on
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                }}
              >
                {job.postedOn}
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
                Apply By
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                  textAlign: "center",
                }}
              >
                {job.jobApplyBy}
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
                No. of Applicants
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "8px",
                  color: "#3a3b3a",
                  fontFamily: "open sans",
                  textAlign: "center",
                }}
              >
                {job.applicantsCount}
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
          <h1
            style={{
              color: "#0f71a6",
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "open sans",
              marginBottom: "10px",
              marginTop: "5px",
            }}
          >
            Job applicants
          </h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontFamily: "open sans",
                      fontSize: "14px",
                    }}
                    align="left"
                  >
                    First Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontFamily: "open sans",
                      fontSize: "14px",
                    }}
                    align="left"
                  >
                    Last name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontFamily: "open sans",
                      fontSize: "14px",
                    }}
                    align="left"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontFamily: "open sans",
                      fontSize: "14px",
                    }}
                    align="left"
                  >
                    View profile
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {job.applicantsEmails.map((applicantEmail) => (
                  <DisplayEachApplicant applicantEmail={applicantEmail} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export function displayEventsRegistered(allEvents, email) {
  const registeredEvents = allEvents.filter((event) => {
    return (
      event.EventApplicantsEmails && event.EventApplicantsEmails.includes(email)
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
        Events Registered
      </h1>
      {registeredEvents.map((event) => myEventItems(event))}
    </Container>
  );
}

export function displayBookmarkEvents(allEvents, email, myUserAdditionalData) {
  const bookmarkedEvents = allEvents.filter((event) => {
    return (
      myUserAdditionalData.eventsBookmarks &&
      myUserAdditionalData.eventsBookmarks.includes(event._id)
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
        Bookmarked Events
      </h1>
      {bookmarkedEvents.map((event) => myEventItems(event))}
    </Container>
  );
}

export function displayJobsPosted(allJobs, email) {
  const postedJobs = allJobs.filter((job) => {
    return job.email === email;
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
        Jobs Posted
      </h1>

      {postedJobs.map((job) => myPostedJobItems(job))}
    </Container>
  );
}
