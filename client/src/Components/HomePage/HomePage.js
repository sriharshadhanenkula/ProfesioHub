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
            width: "20%",
            backgroundColor: "white",
            marginTop: "30px",
            borderRadius: "10px",
            maxHeight: "70vh",
          }}
        >
          <p>Profile Details</p>
        </div>
        <div style={{ width: "50%", margin: "30px", marginTop: "30px" }}>
          <UserFeed />
        </div>
        <div
          style={{
            width: "30%",
            backgroundColor: "white",
            borderRadius: "10px",
            maxHeight: "70vh",
            marginTop: "30px",
          }}
        >
          <p>Promotions</p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
