import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import myEventPageImage from "../../assets/Event1.jpg";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function AddEvent() {
  const [cookies] = useCookies(["email"]);
  const [myEventName, setEventName] = useState("");
  const [myEventDescription, setEventDescription] = useState("");
  const [myEventDate, setEventDate] = useState("");
  const [myEventTime, setEventTime] = useState("");
  const [myEventLocation, setEventLocation] = useState("");
  const [myEventLink, setEventLink] = useState("");
  const [myEventImage, setEventImage] = useState([]);
  const [myEventOrganizer, setEventOrganizer] = useState("");

  const onClickPostEvent = (event) => {
    event.preventDefault();

    if (
      myEventName === "" ||
      myEventDescription === "" ||
      myEventDate === "" ||
      myEventTime === "" ||
      myEventLocation === "" ||
      myEventLink === "" ||
      myEventImage === "" ||
      myEventOrganizer === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      const myData = {
        email: cookies.userEmail,
        eventName: myEventName,
        eventDescription: myEventDescription,
        eventDate: myEventDate,
        eventTime: myEventTime,
        eventLocation: myEventLocation,
        eventLink: myEventLink,
        eventOrganizer: myEventOrganizer,
        eventImage: "",
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = new FormData();
      data.append("file", myEventImage);
      data.append("upload_preset", "SEProject");
      data.append("cloud_name", "dp6ofrbni");

      axios
        .post("https://api.cloudinary.com/v1_1/dp6ofrbni/image/upload", data)
        .then((res) => {
          myData.eventImage = res.data.url;
          axios
            .post("http://localhost:5000/events/addEvent", myData, config)
            .then((res) => {
              toast.success("Event Posted Successfully");
              setEventName("");
              setEventDescription("");
              setEventDate("");
              setEventTime("");
              setEventLocation("");
              setEventLink("");
              setEventImage([]);
              setEventOrganizer("");
            });
        });
    }
  };

  return (
    <div style={{ backgroundColor: "#ebeced", paddingBottom: "30px" }}>
      <MainHeader />
      <Container>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: "30px",
            padding: "25px",
            paddingLeft: "40px",
            paddingRight: "40px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontFamily: "open sans",
              fontSize: "22px",
              fontWeight: "600",
              color: "#0f71a6",
            }}
          >
            Conduct an Event
          </h1>

          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#0f71a6",
              border: "none",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "72%" }} src={myEventPageImage} alt="event" />
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="EventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Name"
                onChange={(e) => setEventName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                style={{ height: "150px", textJustify: "justify" }}
                as="textarea"
                placeholder="Enter Event Description"
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Event Date"
                onChange={(e) => setEventDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Event Time"
                onChange={(e) => setEventTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Location"
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventLink">
              <Form.Label>Event Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Link"
                onChange={(e) => setEventLink(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventImage">
              <Form.Label>Event Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter Event Image"
                onChange={(e) => setEventImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="EventOrganizer">
              <Form.Label>Event Organizer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Organizer"
                onChange={(e) => setEventOrganizer(e.target.value)}
              />
            </Form.Group>
          </Form>
          <ToastContainer />

          <Button
            style={{
              backgroundColor: "#0f71a6",
              color: "white",
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
              fontFamily: "open sans",
              textTransform: "capitalize",
            }}
            onClick={onClickPostEvent}
          >
            Post Event
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default AddEvent;
