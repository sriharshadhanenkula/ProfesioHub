import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import UserFeed from "../UserFeed/UserFeed";
import ProfileBar from "./ProfileBar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function HomePage() {
  const [cookies] = useCookies(["userEmail"]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userEmail = cookies.userEmail;

    const data = {
      email: userEmail,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getUserDetails", data, config)
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data);
        }
      });
  }, [cookies.userEmail]);

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
        <ProfileBar userData={userData} />

        <div style={{ width: "50%", margin: "30px", marginTop: "30px" }}>
          <UserFeed userData={userData} />
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
