import React from "react";
import Button from "@mui/material/Button";
import PhotoIcon from "@mui/icons-material/Photo";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPost(props) {
  const userData = props.userData;

  const [postTextData, setPostTextData] = useState("");
  const [show, setShow] = useState(false);
  const [myImage, setMyImage] = useState([]);
  const handleShow = () => setShow(true);

  const onClickPostButton = () => {
    setShow(false);

    if (myImage.length === 0) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = {
        email: userData.email,
        content: postTextData,
        url: "",
        likes: 0,
        comments: 0,
        shares: 0,
      };

      axios
        .post("http://localhost:5000/addPost", data, config)
        .then(function (response) {
          if (response.status === 201) {
            toast.success("Post added successfully");
          }
        });
      return;
    }

    const data = new FormData();
    data.append("file", myImage);
    data.append("upload_preset", "SEProject");
    data.append("cloud_name", "dp6ofrbni");

    axios
      .post("https://api.cloudinary.com/v1_1/dp6ofrbni/image/upload", data)
      .then(function (response) {
        const getURL = response.data.url;

        if (getURL !== "") {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const data = {
            email: userData.email,
            content: postTextData,
            url: getURL,
            likes: 0,
            comments: 0,
            shares: 0,
          };

          axios
            .post("http://localhost:5000/addPost", data, config)
            .then(function (response) {
              if (response.status === 201) {
                toast.success("Post added successfully");
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    setMyImage(event.target.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleClose = () => {
    setShow(false);
  };

  const modalFunction = () => {
    return (
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
                src={userData.profilePicture}
                alt="avatar"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <p
                  style={{
                    marginLeft: "10px",
                    fontFamily: "open sans",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#0f71a6",
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  {userData.firstName} {userData.lastName}
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    fontFamily: "open sans",
                    fontSize: "10px",
                    color: "#11455c",
                    fontWeight: "600",
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  {userData.role}
                </p>
              </div>
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
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <button
              style={{
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
              onClick={handleClick}
            >
              <PhotoIcon
                style={{ color: "blue", marginRight: "5px", fontSize: "20px" }}
              />
              Photo
            </button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                textTransform: "capitalize",
                fontWeight: "500",
                fontFamily: "open sans",
                fontSize: "14px",
              }}
              onClick={onClickPostButton}
            >
              Post
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  const buttonOptions = () => {
    return (
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
    );
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
          src={userData.profilePicture}
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

        {modalFunction()}
        <ToastContainer />
      </div>
      {buttonOptions()}
    </div>
  );
}

export default AddPost;
