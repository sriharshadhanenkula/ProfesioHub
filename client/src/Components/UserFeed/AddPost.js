import React from "react";
import { faker } from "@faker-js/faker";
import { Button } from "react-bootstrap";
import PhotoIcon from "@mui/icons-material/Photo";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function AddPost() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <img
          style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          src={faker.image.avatar()}
          alt="avatar"
        />
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#02182e",
            border: "1px solid #02182e",
            borderRadius: "20px",
            marginLeft: "10px",
            width: "100%",
            textAlign: "left",
            fontWeight: "400",
          }}
        >
          What's on your mind?
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "14px",
          }}
        >
          <PhotoIcon style={{ color: "blue", marginRight: "5px" }} />
          Photo
        </Button>
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "14px",
          }}
        >
          <OndemandVideoIcon style={{ color: "green", marginRight: "5px" }} />
          Video
        </Button>
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "14px",
          }}
        >
          <EventIcon style={{ color: "brown", marginRight: "5px" }} />
          Event
        </Button>
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "14px",
          }}
        >
          <NewspaperIcon style={{ color: "red", marginRight: "5px" }} />
          Write article
        </Button>
      </div>
    </div>
  );
}

export default AddPost;
