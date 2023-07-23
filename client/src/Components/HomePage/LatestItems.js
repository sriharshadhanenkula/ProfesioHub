import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";

function LatestItems() {
  const [latestEventData, setLatestEventData] = useState([]);
  const [latestJobData, setLatestJobData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events/getAllEvents").then((response) => {
      setLatestEventData(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs/getMyJobs").then((res) => {
      setLatestJobData(res.data);
    });
  }, []);

  const myJobItemDisplay = (job) => {
    return (
      <Link
        to="/jobs"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <div
          style={{
            border: "1px solid #e5e5e5",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={faker.image.avatar()}
            alt="job-item-img"
            style={{
              height: "46px",
              width: "46px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "600",
                fontSize: "13px",
                marginBottom: "3px",
                color: "#3a3b3a",
              }}
            >
              {job.jobTitle}
            </p>
            <ul style={{ paddingLeft: "15px", marginBottom: "3px" }}>
              <li
                style={{
                  fontFamily: "open sans",
                  fontWeight: "500",
                  fontSize: "13px",
                  color: "#3a3b3a",
                }}
              >
                {job.jobCompany}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    );
  };

  const myEventsItemDisplay = (myEvent) => {
    return (
      <Link
        to="/events"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <div
          style={{
            border: "1px solid #e5e5e5",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={myEvent.EventImage}
            alt="job-item-img"
            style={{
              height: "46px",
              width: "46px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "600",
                fontSize: "13px",
                marginBottom: "3px",
                color: "#3a3b3a",
              }}
            >
              {myEvent.EventTitle}
            </p>
            <ul style={{ paddingLeft: "15px", marginBottom: "3px" }}>
              <li
                style={{
                  fontFamily: "open sans",
                  fontWeight: "500",
                  fontSize: "13px",
                  color: "#3a3b3a",
                }}
              >
                {myEvent.EventOrganizer}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      style={{
        width: "28%",
        backgroundColor: "white",
        borderRadius: "10px",
        height: "fit-content",
        marginTop: "30px",
        padding: "15px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "16px",
            fontWeight: "600",
            color: "#0f71a6",
            marginBottom: "1px",
            paddingBottom: "0px",
          }}
        >
          Latest News
        </h1>

        <hr
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#e5e5e5",
            marginTop: "3px",
            marginBottom: "15px",
          }}
        />

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          <WorkIcon
            style={{ fontSize: "16px", color: "gray" }}
            className="me-1"
          />
          Jobs
        </h1>
        {latestJobData.slice(-2).map((job) => myJobItemDisplay(job))}

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "14px",
            fontWeight: "600",
            // color: "#0f71a6",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <EventIcon
            style={{ fontSize: "17px", color: "gray" }}
            className="me-1"
          />
          Events
        </h1>

        {latestEventData
          .slice(-2)
          .map((myEvent) => myEventsItemDisplay(myEvent))}
      </div>
    </div>
  );
}

export default LatestItems;
