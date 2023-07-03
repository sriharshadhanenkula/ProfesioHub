import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Divider } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import { faker } from "@faker-js/faker";

function ProfileBar(props) {
  const userData = props.userData;

  return (
    <div
      style={{
        width: "22%",
        backgroundColor: "white",
        marginTop: "30px",
        borderRadius: "10px",
        height: "fit-content",
        paddingBottom: "10px",
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
              style={{ borderRadius: "50%", width: "38%" }}
            />
          </Row>

          <div className="mt-3 mb-3">
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {userData.firstName} {userData.lastName}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "11px",
                textAlign: "center",
                color: "#747574",
              }}
            >
              {userData.role}
            </p>
          </div>
          <Divider style={{ backgroundColor: "black" }} className="mb-2" />

          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "12px",
              fontFamily: "open sans",
              color: "#3a3b3a",
              width: "100%",
              textAlign: "start",
            }}
          >
            <EventAvailableIcon
              style={{ fontSize: "16px", color: "gray" }}
              className="me-1"
            />
            Events registered
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "12px",
              fontFamily: "open sans",
              color: "#3a3b3a",
              width: "100%",
              textAlign: "start",
            }}
          >
            <BookmarkIcon
              style={{ fontSize: "16px", color: "gray" }}
              className="me-1"
            />
            My Items
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "12px",
              fontFamily: "open sans",
              color: "#3a3b3a",
              textAlign: "start",
              width: "100%",
            }}
          >
            <PeopleIcon
              style={{ fontSize: "16px", color: "gray" }}
              className="me-1"
            />
            Number of Connections: 500
          </Button>
        </Container>
      </Row>
    </div>
  );
}

export default ProfileBar;
