import React from "react";
import { Container } from "@mui/material";
import MainHeader from "../Header/MainHeader";
import EventItem from "./EventItem";
import { Button } from "@mui/material";
import { GoBookmark } from "react-icons/go";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Events() {
  const [eventData, setEventData] = useState([]);
  const [myEventItemDetails, setEventItemDetails] = useState([]);
  const [isEventRegistered, setIsEventRegistered] = useState(false);
  const [isEventBookmarked, setIsEventBookmarked] = useState(false);
  const [cookies] = useCookies(["userEmail"]);
  const email = cookies.userEmail;

  useEffect(() => {
    axios.get("http://localhost:5000/events/getAllEvents").then((response) => {
      setEventData(response.data);
      setEventItemDetails(response.data[0]);

      if (response.data[0].EventApplicantsEmails.includes(email)) {
        setIsEventRegistered(true);
      } else {
        setIsEventRegistered(false);
      }
    });
  }, [email]);

  useEffect(() => {
    const data = {
      email: email,
      eventId: myEventItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getIsEventBookmarked", data, config)
      .then((res) => {
        if (res.data) {
          setIsEventBookmarked(true);
        } else {
          setIsEventBookmarked(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, myEventItemDetails]);

  const onClickSaveEventButton = () => {
    const data = {
      email: email,
      eventId: myEventItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/bookmarkEvent", data, config)
      .then((res) => {
        setIsEventBookmarked(res.data);
      });
  };

  const onClickRegisterEventButton = () => {
    const data = {
      email: email,
      eventId: myEventItemDetails._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/events/registerEvent", data, config)
      .then((res) => {
        console.log(res.data);
        toast.success("Registered successfully");
      });
  };

  const eventDescriptionTab = () => {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "65%",
          marginTop: "15px",
          border: "1px solid #e5e5e5",
          overflowY: "scroll",
          padding: "25px",
          paddingBottom: "40px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <img
            style={{ width: "100%", height: "200px", borderRadius: "10px" }}
            src={myEventItemDetails.EventImage}
            alt="event"
          />
        </div>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "600",
            color: "#0f71a6",
          }}
        >
          {myEventItemDetails.EventTitle}
        </h1>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Organizer
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myEventItemDetails.EventOrganizer}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Date & Time
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myEventItemDetails.EventDate} {myEventItemDetails.EventTime}
            </p>
          </div>
          <div style={{ textAlign: "center", width: "33%" }}>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Location
            </p>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "13px",
                fontWeight: "600",
                margin: "0px",
              }}
            >
              {myEventItemDetails.EventLocation}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {isEventBookmarked ? (
              <Button
                variant="outlined"
                style={{
                  fontFamily: "open sans",
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  border: "1px solid black",
                  marginRight: "15px",
                  borderRadius: "10px",
                  width: "90px",
                  fontSize: "13px",
                }}
                onClick={onClickSaveEventButton}
              >
                <GoBookmark style={{ fontSize: "16px", marginRight: "3px" }} />{" "}
                Saved
              </Button>
            ) : (
              <Button
                variant="outlined"
                style={{
                  fontFamily: "open sans",
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  border: "1px solid black",
                  marginRight: "15px",
                  borderRadius: "10px",
                  width: "90px",
                  fontSize: "13px",
                }}
                onClick={onClickSaveEventButton}
              >
                <GoBookmark style={{ fontSize: "16px", marginRight: "3px" }} />{" "}
                Save
              </Button>
            )}

            {isEventRegistered ? (
              <Button
                variant="contained"
                color="success"
                style={{
                  fontFamily: "open sans",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  borderRadius: "10px",
                  width: "90px",
                  fontSize: "13px",
                }}
              >
                Registered
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{
                  fontFamily: "open sans",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  borderRadius: "10px",
                  width: "90px",
                  fontSize: "13px",
                }}
                onClick={onClickRegisterEventButton}
              >
                Register
              </Button>
            )}
            <ToastContainer />
          </div>
          <h1
            style={{
              fontFamily: "open sans",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <a
              href={myEventItemDetails.EventLink}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#0f71a6" }}
            >
              View website <OpenInNewIcon style={{ fontSize: "16px" }} />
            </a>
          </h1>
        </div>

        <h1
          style={{
            fontFamily: "open sans",
            fontSize: "18px",
            fontWeight: "600",
            color: "#0f71a6",
            marginTop: "25px",
          }}
        >
          Event Details
        </h1>
        <p
          style={{
            textAlign: "justify",
            fontSize: "14px",
          }}
        >
          {myEventItemDetails.EventDescription}
        </p>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />
      <Container>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "100%",
            marginTop: "30px",
            height: "50px",
          }}
        >
          <p>My Events filters</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "81vh",
          }}
        >
          <div
            style={{
              width: "35%",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "15px",
              overflowY: "scroll",
              backgroundColor: "white",
              border: "1px solid #e4e4e4",
              marginBottom: "5px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            {eventData.map((event) => (
              <EventItem
                key={event._id}
                event={event}
                setEventItemDetails={setEventItemDetails}
                setIsEventRegistered={setIsEventRegistered}
                setIsEventBookmarked={setIsEventBookmarked}
              />
            ))}
          </div>

          {eventDescriptionTab()}
        </div>
      </Container>
    </div>
  );
}

export default Events;
