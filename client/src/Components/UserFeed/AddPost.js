import React from "react";
import { faker } from "@faker-js/faker";
import Button from "@mui/material/Button";
import PhotoIcon from "@mui/icons-material/Photo";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddPost() {
  const [postTextData, setPostTextData] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      email: "sriHarsha",
      content: postTextData,
    };

    axios.post("http://localhost:5000/addPost", data, config).then((res) => {
      console.log(res);
    });
  };

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
          sx={{
            backgroundColor: "transparent",
            color: "#02182e",
            border: "1px solid #02182e",
            borderRadius: "20px",
            marginLeft: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "12px",
            fontFamily: "open sans",
            textTransform: "capitalize",
            paddingLeft: "20px",
            "&:hover": {
              backgroundColor: "#dfe5eb",
              color: "black",
            },
          }}
          onClick={handleShow}
        >
          What's on your mind?
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                  }}
                  src={faker.image.avatar()}
                  alt="avatar"
                />
                <p
                  style={{
                    marginLeft: "10px",
                    fontWeight: "500",
                    fontFamily: "open sans",
                    fontSize: "16px",
                  }}
                >
                  Sri Harsha
                </p>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                outline: "none",
                resize: "none",
                fontFamily: "open sans",
                fontSize: "16px",
              }}
              placeholder="What do you want to talk about?"
              onChange={(e) => {
                setPostTextData(e.target.value);
              }}
            ></textarea>
            <div></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
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
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "12px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#dfe5eb",
            },
          }}
        >
          <PhotoIcon
            style={{ color: "blue", marginRight: "5px", fontSize: "20px" }}
          />
          Photo
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "12px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#dfe5eb",
            },
          }}
        >
          <OndemandVideoIcon
            style={{ color: "green", marginRight: "5px", fontSize: "20px" }}
          />
          Video
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "12px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#dfe5eb",
            },
          }}
        >
          <EventIcon
            style={{ color: "brown", marginRight: "5px", fontSize: "20px" }}
          />
          Event
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "#05386b",
            border: "none",
            fontWeight: "500",
            fontFamily: "open sans",
            fontSize: "12px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#dfe5eb",
            },
          }}
        >
          <NewspaperIcon
            style={{ color: "red", marginRight: "5px", fontSize: "18px" }}
          />
          Write article
        </Button>
      </div>
    </div>
  );
}

export default AddPost;
