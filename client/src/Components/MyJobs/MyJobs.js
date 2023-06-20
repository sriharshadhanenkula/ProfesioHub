import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import MyJobItem from "./MyJobItem";

function MyJob() {
  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />

      <Container sx={{ height: "83vh" }}>
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
              width: "40%",
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "15px",
              border: "1px solid #e5e5e5",
              overflowY: "scroll",
            }}
          >
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
            <MyJobItem />
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "60%",
              marginTop: "15px",
              border: "1px solid #e5e5e5",
              overflowY: "scroll",
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
