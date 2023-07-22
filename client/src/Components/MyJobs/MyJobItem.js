import { Container } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";

function MyJobItem(props) {
  const { jobItem, setMyJobItemDetails } = props;

  const onClickJobItem = () => {
    setMyJobItemDetails(jobItem);
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
          style={{ height: "55px", width: "55px", borderRadius: "50%" }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p
          style={{
            fontFamily: "open sans",
            fontWeight: "bold",
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
