import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import {
  UserBioCard,
  GetWorkExperienceTimeLine,
  GetEducationTimeLine,
  SkillsCard,
  ProjectSection,
} from "./UserProfileSections";
import UserProfileHeader from "./UserProfileHeader";

function UserProfile() {
  const [cookies] = useCookies(["userEmail"]);
  const [userData, setUserData] = useState({});
  const [userAdditionalData, setUserAdditionalData] = useState({});

  useEffect(() => {
    const userEmail = cookies.userEmail;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      email: userEmail,
    };

    axios
      .post("http://localhost:5000/users/getUserDetails", data, config)
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data);
        }
      });
  }, [cookies.userEmail]);

  useEffect(() => {
    const userEmail = cookies.userEmail;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      email: userEmail,
    };

    axios
      .post("http://localhost:5000/users/getUserAdditionalData", data, config)
      .then((res) => {
        if (res.status === 200) {
          setUserAdditionalData(res.data);
        }
      });
  }, [cookies.userEmail]);

  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />

      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "75%",
              marginRight: "10px",
              marginBottom: "30px",
            }}
          >
            <UserProfileHeader userData={userData} />
            {UserBioCard(userAdditionalData)}
            {GetWorkExperienceTimeLine(userData)}
            {GetEducationTimeLine(userData)}
            {SkillsCard()}
            {ProjectSection()}
          </div>

          <div style={{ backgroundColor: "lightcyan", width: "25%" }}>
            <p>Display</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UserProfile;
