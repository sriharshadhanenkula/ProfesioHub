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
            marginTop: "16px",
            borderRadius: "10px",
          }}
        >
          <p>Profile Details</p>
        </div>
        <div style={{ width: "50%" }}>
          <UserFeed />
        </div>
        <div
          style={{
            width: "25%",
            backgroundColor: "white",

            borderRadius: "10px",
            marginTop: "16px",
          }}
        >
          <p>Promotions</p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
