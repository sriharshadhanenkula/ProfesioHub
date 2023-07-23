import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Divider } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

function ProfileBar(props) {
  const userData = props.userData;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "22%",
        height: "fit-content",
        borderRadius: "10px",
        marginTop: "30px",
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

          <div className="mt-2">
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "600",
                fontSize: "15px",
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              {userData.firstName} {userData.lastName}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "12px",
                textAlign: "center",
                color: "#747574",
                marginBottom: "8px",
              }}
            >
              {userData.role}
            </p>
          </div>
          <Divider style={{ backgroundColor: "black" }} className="mb-2" />

          <Button
            style={{
              border: "none",
              fontSize: "12px",
              fontFamily: "open sans",
              color: "#3a3b3a",
              width: "100%",
              textAlign: "start",
              backgroundColor: "transparent",
            }}
          >
            <EventAvailableIcon
              style={{ fontSize: "16px", color: "gray" }}
              className="me-1"
            />
            Events registered
          </Button>
          <Link to="/myItems">
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
          </Link>

          <Link to="/addJob">
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
              <WorkIcon
                style={{ fontSize: "16px", color: "gray" }}
                className="me-1"
              />
              Post a Job
            </Button>
          </Link>

          <Link to="/addEvent">
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
              <EventIcon
                style={{ fontSize: "16px", color: "gray" }}
                className="me-1"
              />
              Add an Event
            </Button>
          </Link>

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
