import { Container } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";

function MyJobItem() {
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
          {faker.name.jobTitle()}
        </p>
        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "3px",
          }}
        >
          {faker.company.name()}
        </p>
        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "3px",
          }}
        >
          {faker.address.state()}, {faker.address.country()}
        </p>

        <p
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            marginBottom: "2px",
          }}
        >
          Posted on : {faker.date.past().toDateString()}
        </p>
      </div>
    </Container>
  );
}

export default MyJobItem;
