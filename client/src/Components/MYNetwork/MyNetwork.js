import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import ManageNetworkBar from "./ManageNetworkBar";
import UserProfileCard from "./UserProfileCard";

function MyNetwork() {
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
        <ManageNetworkBar />

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            minHeight: "90vh",
            width: "70%",
            marginTop: "30px",
            marginLeft: "30px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
        </div>
      </Container>
    </div>
  );
}

export default MyNetwork;
