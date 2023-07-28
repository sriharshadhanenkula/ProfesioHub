import React from "react";
import MainHeader from "../Header/MainHeader";
import { Button, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { GoBookmark } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyJobItem from "./MyJobItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { useCookies } from "react-cookie";

function MyJob() {
  const [myJobs, setMyJobs] = useState([]);
  const [myJobItemDetails, setMyJobItemDetails] = useState([{}]);
  const [isJobApplied, setIsJobApplied] = useState(false);
  const [isJobBookmarked, setIsJobBookmarked] = useState(false);
  const [cookies] = useCookies(["userEmail"]);
  const email = cookies.userEmail;

  useEffect(() => {
    axios.get("http://localhost:5000/jobs/getMyJobs").then((res) => {
      setMyJobs(res.data);
      setMyJobItemDetails(res.data[0]);

      if (res.data[0].applicantsEmails.includes(email)) {
        setIsJobApplied(true);
      } else {
        setIsJobApplied(false);
      }
    });
  }, [email]);

  useEffect(() => {
    const data = {
      email: email,
      jobId: myJobItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getIsJobBookmarked", data, config)
      .then((res) => {
        if (res.data) {
          setIsJobBookmarked(true);
        } else {
          setIsJobBookmarked(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [myJobItemDetails, email]);

  const onClickSaveJobButton = () => {
    const data = {
      email: email,
      jobId: myJobItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/bookmarkJob", data, config)
      .then((res) => {
        setIsJobBookmarked(res.data);
      });
  };

  const onClickApplyButton = () => {
    const data = {
      email: email,
      jobId: myJobItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/jobs/applyJob", data, config)
      .then((res) => {
        // console.log(res.data);
        toast.success("Applied successfully");
      });
  };

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
            fontSize: "20px",
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
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "13px",
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
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#034766",
                  margin: "0px",
                }}
              >
                <LocationOnIcon
                  style={{ fontSize: "15px", marginRight: "1px" }}
                />
                {myJobItemDetails.jobLocation}
              </p>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "open sans",
              fontSize: "14px",
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
            fontSize: "18px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Application deadline
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Posted date
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Estimated pay
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myJobItemDetails.jobSalary}
            </p>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          {isJobBookmarked ? (
            <Button
              variant="outlined"
              style={{
                fontFamily: "open sans",
                color: "black",
                textTransform: "capitalize",
                fontWeight: "600",
                border: "1px solid black",
                marginRight: "15px",
                borderRadius: "10px",
                width: "90px",
                fontSize: "13px",
              }}
              onClick={onClickSaveJobButton}
            >
              <GoBookmark style={{ fontSize: "16px", marginRight: "3px" }} />
              Saved
            </Button>
          ) : (
            <Button
              variant="outlined"
              style={{
                fontFamily: "open sans",
                color: "black",
                textTransform: "capitalize",
                fontWeight: "600",
                border: "1px solid black",
                marginRight: "15px",
                borderRadius: "10px",
                width: "90px",
                fontSize: "13px",
              }}
              onClick={onClickSaveJobButton}
            >
              <GoBookmark style={{ fontSize: "16px", marginRight: "3px" }} />{" "}
              Save
            </Button>
          )}
          {isJobApplied ? (
            <Button
              variant="contained"
              color="success"
              style={{
                fontFamily: "open sans",
                textTransform: "capitalize",
                fontWeight: "600",
                borderRadius: "10px",
                width: "90px",
                fontSize: "13px",
              }}
            >
              Applied
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{
                fontFamily: "open sans",
                textTransform: "capitalize",
                fontWeight: "600",
                borderRadius: "10px",
                width: "90px",
                fontSize: "13px",
              }}
              onClick={onClickApplyButton}
            >
              Apply
            </Button>
          )}
          <ToastContainer />
        </div>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "18px",
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
            fontSize: "14px",
          }}
        >
          {myJobItemDetails.jobDescription}
        </p>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "18px",
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
            fontSize: "14px",
          }}
        >
          {myJobItemDetails.jobSkills}
        </p>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "18px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Education level
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Job Experience
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Job Type
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Industry
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
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
                setIsJobApplied={setIsJobApplied}
                setIsJobBookmarked={setIsJobBookmarked}
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
