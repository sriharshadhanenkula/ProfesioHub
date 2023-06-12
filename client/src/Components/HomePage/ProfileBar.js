import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import profileBackground from "../../assets/profileBackground.jpg";
import { Divider } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import { faker } from "@faker-js/faker";

function ProfileBar() {
  return (
    <div
      style={{
        width: "22%",
        backgroundColor: "white",
        marginTop: "30px",
        borderRadius: "10px",
        maxHeight: "350px",
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
          src={profileBackground}
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
              src={faker.image.avatar()}
              alt="profile"
              style={{ borderRadius: "50%", width: "90px", height: "70px" }}
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
              {faker.name.firstName()} {faker.name.lastName()}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "8px",
                textAlign: "center",
                color: "#747574",
              }}
            >
              Graduate Student at University at Albany
            </p>
          </div>
          <Divider style={{ backgroundColor: "black" }} className="mb-2" />

          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "10px",
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
              fontSize: "10px",
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
              fontSize: "10px",
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
