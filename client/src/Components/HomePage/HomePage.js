import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import UserFeed from "../UserFeed/UserFeed";
import ProfileBar from "./ProfileBar";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#ebeced" }}>
      <MainHeader />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ProfileBar />

        <div style={{ width: "50%", margin: "30px", marginTop: "30px" }}>
          <UserFeed />
        </div>
        <div
          style={{
            width: "28%",
            backgroundColor: "white",
            borderRadius: "10px",
            maxHeight: "70vh",
            marginTop: "30px",
          }}
        >
          <p>Display recent jobs and events</p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
