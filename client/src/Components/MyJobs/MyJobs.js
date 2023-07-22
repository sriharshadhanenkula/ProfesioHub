import React from "react";
import MainHeader from "../Header/MainHeader";
import { Button, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { GoBookmark } from "react-icons/go";
import MyJobItem from "./MyJobItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { faker } from "@faker-js/faker";

function MyJob() {
  const [cookies] = useCookies(["userEmail"]);
  const [myJobs, setMyJobs] = useState([]);
  const [myJobItemDetails, setMyJobItemDetails] = useState([{}]);

  useEffect(() => {
    const data = {
      email: cookies.userEmail,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/jobs/getMyJobs", data, config)
      .then((res) => {
        setMyJobs(res.data);
        setMyJobItemDetails(res.data[0]);
      });
  }, [cookies.userEmail]);

  const jobDescriptionTab = () => {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "65%",
          marginTop: "15px",
          border: "1px solid #e5e5e5",
          overflowY: "scroll",
          padding: "25px",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "22px",
            fontWeight: "600",
            color: "#0f71a6",
          }}
        >
          {myJobItemDetails.jobTitle}
        </h1>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ marginRight: "15px" }}>
              <img
                src={faker.image.avatar()}
                alt="company-logo"
                style={{ height: "53px", width: "53px", borderRadius: "50%" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#034766",
                  margin: "0px",
                  marginBottom: "8px",
                }}
              >
                {myJobItemDetails.jobCompany}
              </p>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#034766",
                  margin: "0px",
                }}
              >
                <LocationOnIcon
                  style={{ fontSize: "16px", marginRight: "1px" }}
                />
                {myJobItemDetails.jobLocation}
              </p>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "open sans",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <a
              href={myJobItemDetails.jobCompanyWebsite}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#0f71a6" }}
            >
              View website <OpenInNewIcon style={{ fontSize: "16px" }} />
            </a>
          </h1>
        </div>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "600",
            color: "#0f71a6",
            marginTop: "25px",
          }}
        >
          About Role
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Application deadline
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobApplyBy}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Posted date
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.postedOn}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Estimated pay
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobSalary}
            </p>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <Button
            variant="outlined"
            style={{
              fontFamily: "open sans",
              color: "black",
              textTransform: "capitalize",
              fontWeight: "700",
              border: "1px solid black",
              marginRight: "15px",
              borderRadius: "10px",
              width: "100px",
            }}
          >
            <GoBookmark style={{ fontSize: "18px", marginRight: "3px" }} /> Save
          </Button>

          <Button
            variant="contained"
            style={{
              fontFamily: "open sans",
              textTransform: "capitalize",
              fontWeight: "600",
              borderRadius: "10px",
              width: "100px",
            }}
          >
            Apply
          </Button>
        </div>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "600",
            color: "#0f71a6",
            marginTop: "25px",
          }}
        >
          Job Description
        </h1>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          {myJobItemDetails.jobDescription}
        </p>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "600",
            color: "#0f71a6",
            marginTop: "25px",
          }}
        >
          Skills
        </h1>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          {myJobItemDetails.jobSkills}
        </p>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "600",
            color: "#0f71a6",
            marginTop: "25px",
          }}
        >
          More about this role
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Education level
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobEducationLevel}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Job Experience
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobExperienceLevel}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Job Type
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobType}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Industry
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobIndustry}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />

      <Container sx={{ height: "81vh", padding: "10px" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
            marginTop: "30px",
            height: "50px",
          }}
        >
          <p>My Job filters</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "35%",
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "15px",
              border: "1px solid #e5e5e5",
              overflowY: "scroll",
            }}
          >
            {myJobs.map((jobItem) => (
              <MyJobItem
                key={jobItem._id}
                jobItem={jobItem}
                setMyJobItemDetails={setMyJobItemDetails}
                myJobItemDetails={myJobItemDetails}
              />
            ))}
          </div>
          {jobDescriptionTab()}
        </div>
      </Container>
    </div>
  );
}

export default MyJob;
