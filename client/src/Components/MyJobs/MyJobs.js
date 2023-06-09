import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import MyJobListBar from "./MyJobListBar";

function MyJob() {
  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />

      <Container>
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
          }}
        >
          <MyJobListBar />

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              minHeight: "90vh",
              width: "60%",
              marginLeft: "15px",
              marginTop: "15px",
            }}
          >
            <p>My Job Description</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MyJob;
