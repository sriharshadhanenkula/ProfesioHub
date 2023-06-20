import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Container } from "@mui/material";
import { faker } from "@faker-js/faker";

function EventItem(props) {
  const event = props.event;

  return (
    <Container
      key={event.id}
      style={{
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        paddingBottom: "0px",
        width: "100%",
      }}
      sx={{
        "&:hover": {
          backgroundColor: "#e4f0f7",
          cursor: "pointer",
        },
      }}
    >
      <img
        src={faker.image.urlPicsumPhotos(70, 70)}
        alt="event"
        style={{ width: "70px", height: "70px", borderRadius: "5px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "12px",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "open sans",
            color: "#0f71a6",
            marginBottom: "12px",
          }}
        >
          {faker.company.name()}
        </p>
        <p
          style={{
            fontSize: "12px",
            fontFamily: "open sans",
            fontWeight: "500",
            marginBottom: "12px",
          }}
        >
          <SchoolIcon
            style={{ color: "#575859", marginRight: "6px", fontSize: "17px" }}
          />
          {faker.company.catchPhrase()}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#3d3e40",
            fontFamily: "open sans",
            fontWeight: "500",
          }}
        >
          <p style={{ fontSize: "11px" }}>
            <PushPinIcon style={{ marginRight: "4px", fontSize: "14px" }} />
            {event.medium}
          </p>
          <p style={{ fontSize: "11px" }}>
            <CalendarMonthIcon
              style={{ marginRight: "4px", fontSize: "14px" }}
            />
            {faker.date.recent().toLocaleDateString()}
          </p>
          <p style={{ fontSize: "11px" }}>
            <AccessTimeIcon style={{ marginRight: "4px", fontSize: "14px" }} />
            {faker.date.recent().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default EventItem;
