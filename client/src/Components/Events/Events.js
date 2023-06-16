import React from "react";
import { Container } from "@mui/material";
import MainHeader from "../Header/MainHeader";
import EventItem from "./EventItem";
import myEventsData from "../data/EventsData";

function Events() {
  const eventData = myEventsData;
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
          }}
        >
          <div
            style={{
              width: "35%",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "15px",
              overflowY: "scroll",
              height: "80vh",
              backgroundColor: "white",
            }}
          >
            {eventData.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              height: "80vh",
              width: "65%",
              marginLeft: "15px",
              marginTop: "15px",
              overflowY: "scroll",
            }}
          >
            <p>My Event Description</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Events;
