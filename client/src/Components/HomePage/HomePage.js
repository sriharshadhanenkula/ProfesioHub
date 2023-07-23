import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import UserFeed from "../UserFeed/UserFeed";
import ProfileBar from "./ProfileBar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import LatestItems from "./LatestItems";

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

        <LatestItems />
      </Container>
    </div>
  );
}

export default HomePage;
