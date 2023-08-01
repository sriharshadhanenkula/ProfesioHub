import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import ManageNetworkBar from "./ManageNetworkBar";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

function MyNetwork() {
  const [connections, setConnections] = useState([]);
  const [cookies] = useCookies(["userEmail"]);

  const email = cookies.userEmail;

  useEffect(() => {
    const data = {
      email: email,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getAllConnections", data, config)
      .then((res) => {
        if (res.status === 200) {
          setConnections(res.data);
        }
      });
  }, [email]);

  return (
    <div style={{ backgroundColor: "#ebeced" }}>
      <MainHeader />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: "90vh",
        }}
      >
        <ManageNetworkBar />

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            minHeight: "85vh",
            height: "fit-content",
            width: "74%",
            marginTop: "30px",
            marginLeft: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: "5px",
          }}
        >
          {connections.map((user) => {
            return (
              <UserProfileCard
                key={user._id}
                userData={user}
                setConnections={setConnections}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MyNetwork;
