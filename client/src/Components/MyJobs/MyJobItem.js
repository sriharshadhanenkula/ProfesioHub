import { Container } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { useCookies } from "react-cookie";
import axios from "axios";

function MyJobItem(props) {
  const { jobItem, setMyJobItemDetails, setIsJobApplied, setIsJobBookmarked } =
    props;

  const [cookies] = useCookies(["userEmail"]);
  const email = cookies.userEmail;

  const isJobBookmarkedFunction = async () => {
    const data = {
      email: email,
      jobId: jobItem._id,
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
  };

  const onClickJobItem = () => {
    setMyJobItemDetails(jobItem);
    isJobBookmarkedFunction();

    if (jobItem.applicantsEmails.includes(email)) {
      setIsJobApplied(true);
    } else {
      setIsJobApplied(false);
    }
  };

  return (
    <Container
      sx={{
        "&:hover": {
          backgroundColor: "#e4f0f7",
          cursor: "pointer",
        },
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid #e5e5e5",
        padding: "10px",
      }}
      onClick={onClickJobItem}
    >
      <div>
        <img
          src={faker.image.avatar()}
          alt="job-item-img"
          style={{ height: "53px", width: "53px", borderRadius: "50%" }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p
          style={{
            fontFamily: "open sans",
            fontWeight: "600",
            fontSize: "16px",
            color: "#0f71a6",
            marginBottom: "3px",
          }}
        >
          {jobItem.jobTitle}
        </p>
        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "3px",
          }}
        >
          {jobItem.jobCompany}
        </p>
        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "3px",
          }}
        >
          {jobItem.jobLocation}
        </p>

        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "2px",
          }}
        >
          Posted on : {jobItem.postedOn}
        </p>
      </div>
    </Container>
  );
}

export default MyJobItem;
