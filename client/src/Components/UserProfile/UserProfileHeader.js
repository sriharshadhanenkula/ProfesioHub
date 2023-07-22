import React from "react";
import { Form, Row } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import { faker } from "@faker-js/faker";
import profileBackground from "../../assets/profileBackground.jpg";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function UserProfileHeader(props) {
  const userData = props.userData;
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [myFirstName, setMyFirstName] = useState("");
  const [myLastName, setMyLastName] = useState("");
  const [myCity, setMyCity] = useState("");
  const [myState, setMyState] = useState("");
  const [myCountry, setMyCountry] = useState("");
  const [myUniversity, setMyUniversity] = useState("");
  const [myProfilePicture, setMyProfilePicture] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const onClickSave = async () => {
    setShow(false);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const myData = {
      email: userData.email,
      firstName: myFirstName === "" ? userData.firstName : myFirstName,
      lastName: myLastName === "" ? userData.lastName : myLastName,
      city: myCity === "" ? userData.city : myCity,
      state: myState === "" ? userData.state : myState,
      country: myCountry === "" ? userData.country : myCountry,
      university: myUniversity === "" ? userData.university : myUniversity,
      profilePicture: "",
    };

    if (myProfilePicture.length === 0) {
      myData.profilePicture = userData.profilePicture;
      axios
        .put("http://localhost:5000/users/updateUserDetails", myData, config)
        .then((res) => {
          //console.log(res);
        });
    }

    const data = new FormData();
    data.append("file", myData.profilePicture);
    data.append("upload_preset", "SEProject");
    data.append("cloud_name", "dp6ofrbni");

    axios
      .post("https://api.cloudinary.com/v1_1/dp6ofrbni/image/upload", data)
      .then((res) => {
        myData.profilePicture = res.data.url;
        axios
          .put("http://localhost:5000/users/updateUserDetails", myData, config)
          .then((res) => {
            //console.log(res);
          });
      });

    setMyFirstName("");
    setMyLastName("");
    setMyCity("");
    setMyState("");
    setMyCountry("");
    setMyUniversity("");
    setMyProfilePicture([]);
  };

  const UserProfileHeaderModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={myFirstName}
                onChange={(e) => setMyFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={myLastName}
                onChange={(e) => setMyLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={myCity}
                onChange={(e) => setMyCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter State"
                value={myState}
                onChange={(e) => setMyState(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country"
                value={myCountry}
                onChange={(e) => setMyCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter University"
                value={myUniversity}
                onChange={(e) => setMyUniversity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter University"
                onChange={(e) => setMyProfilePicture(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>

          <button className="btn btn-primary" onClick={onClickSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
      <Row>
        <img
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
          src={profileBackground}
          alt="profile-cover-page"
        />
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px",
            paddingBottom: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-130px",
            }}
          >
            <img
              style={{
                width: "170px",
                height: "170px",
                border: "5px solid white",
                objectFit: "cover",
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "1px",
              }}
              src={userData.profilePicture}
              alt="profile-avatar"
            />
          </div>
          <EditIcon onClick={handleShow} style={{ cursor: "pointer" }} />
          {UserProfileHeaderModal()}
        </div>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "30px",
            paddingTop: "10px",
            paddingBottom: "0px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "open sans",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {userData.firstName} {userData.lastName}
            </h1>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              {userData.role}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              {userData.city}, {userData.state},{userData.country}
            </p>
          </div>
          <div
            style={{
              maxWidth: "45%",
              minWidth: "36%",
            }}
          >
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              <img
                style={{
                  width: "60px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src={faker.image.avatar()}
                alt="profile-avatar"
              />
              {userData.university}
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default UserProfileHeader;
