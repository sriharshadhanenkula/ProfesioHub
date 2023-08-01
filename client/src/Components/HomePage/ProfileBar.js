import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function ProfileBar(props) {
  const userData = props.userData;
  const [myUserAdditionalData, setMyUserAdditionalData] = useState({});

  useEffect(() => {
    const userEmail = userData.email;
    const data = {
      email: userEmail,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getUserAdditionalData", data, config)
      .then((res) => {
        if (res.status === 200) {
          setMyUserAdditionalData(res.data);
        }
      });
  }, [userData.email]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "22%",
        height: "fit-content",
        borderRadius: "10px",
        marginTop: "30px",
        paddingBottom: "10px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
      }}
    >
      <Row>
        <img
          style={{
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            width: "100%",
            height: "100%",
            marginTop: "1px",
          }}
          src={faker.image.imageUrl(300, 100, "people", true, true)}
          alt="profile"
        />
      </Row>
      <Row>
        <Container>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-15%",
            }}
          >
            <img
              src={userData.profilePicture}
              alt="profile"
              style={{ borderRadius: "50%", width: "38%", height: "80px" }}
            />
          </Row>

          <div className="mt-2">
            <Link to="/userProfile" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontFamily: "open sans",
                  fontWeight: "600",
                  fontSize: "15px",
                  textAlign: "center",
                  marginBottom: "8px",
                  color: "#0f71a6",
                }}
              >
                {userData.firstName} {userData.lastName}
              </p>
            </Link>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "12px",
                textAlign: "center",
                color: "#3a3a3a",
                marginBottom: "8px",
              }}
            >
              {userData.role}
            </p>
          </div>
          <Divider style={{ backgroundColor: "black" }} className="mb-2" />
          <Link to="/myItems" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "open sans",
                color: "gray",
                "&:hover": {
                  backgroundColor: "#e4f0f7",
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              <EventAvailableIcon
                style={{ fontSize: "17px", color: "gray" }}
                className="me-1"
              />
              Events registered
            </Button>
          </Link>
          <Link to="/myItems" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "open sans",
                color: "gray",
                "&:hover": {
                  backgroundColor: "#e4f0f7",
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              <BookmarkIcon
                style={{ fontSize: "17px", color: "gray" }}
                className="me-1"
              />
              My Items
            </Button>
          </Link>

          <Link to="/addJob" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "open sans",
                color: "gray",
                "&:hover": {
                  backgroundColor: "#e4f0f7",
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              <WorkIcon
                style={{ fontSize: "17px", color: "gray" }}
                className="me-1"
              />
              Post a Job
            </Button>
          </Link>

          <Link to="/addEvent" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "open sans",
                color: "gray",
                "&:hover": {
                  backgroundColor: "#e4f0f7",
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              <EventIcon
                style={{ fontSize: "17px", color: "gray" }}
                className="me-1"
              />
              Add an Event
            </Button>
          </Link>
          <Link to="/myNetwork" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "open sans",
                color: "gray",
                "&:hover": {
                  backgroundColor: "#e4f0f7",
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              <PeopleIcon
                style={{ fontSize: "17px", color: "gray" }}
                className="me-1"
              />
              Connections:{" "}
              {myUserAdditionalData && myUserAdditionalData.connections
                ? myUserAdditionalData.connections.length
                : 0}
            </Button>
          </Link>
        </Container>
      </Row>
    </div>
  );
}

export default ProfileBar;
