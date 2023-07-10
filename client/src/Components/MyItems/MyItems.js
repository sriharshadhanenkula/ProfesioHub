import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";

function myItems() {
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
        sree
      </Container>
    </div>
  );
}

export default myItems;
