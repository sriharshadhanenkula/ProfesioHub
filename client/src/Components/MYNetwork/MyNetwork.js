import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import ManageNetworkBar from "./ManageNetworkBar";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { useState } from "react";

function MyNetwork() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.get("http://localhost:5000/users/getAllUsers", config).then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);

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
          {users.map((user) => {
            return <UserProfileCard userData={user} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default MyNetwork;
