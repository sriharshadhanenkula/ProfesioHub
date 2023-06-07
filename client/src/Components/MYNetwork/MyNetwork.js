import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import ManageNetworkBar from "./ManageNetworkBar";

function MyNetwork() {
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
        <ManageNetworkBar />

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            maxHeight: "70vh",
            width: "70%",
            margin: "30px",
            marginTop: "30px",
          }}
        >
          <p>My Network</p>
        </div>
      </Container>
    </div>
  );
}

export default MyNetwork;
