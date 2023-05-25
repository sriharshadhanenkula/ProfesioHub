import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import UserFeed from "../UserFeed/UserFeed";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "25%",
            backgroundColor: "white",
            marginTop: "14px",
            borderRadius: "6px",
          }}
        >
          <p>Profile Details</p>
        </div>
        <div style={{ width: "50%", marginTop: "14px" }}>
          <UserFeed />
        </div>
        <div
          style={{
            width: "25%",
            backgroundColor: "white",
            marginTop: "14px",
            borderRadius: "6px",
          }}
        >
          <p>Promotions</p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
