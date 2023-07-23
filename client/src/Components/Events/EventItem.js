import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Container } from "@mui/material";

function EventItem(props) {
  const { event, setEventItemDetails } = props;

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
        border: "1px solid #e4e4e4",
        marginBottom: "10px",
      }}
      sx={{
        "&:hover": {
          backgroundColor: "#e4f0f7",
          cursor: "pointer",
        },
      }}
      onClick={() => setEventItemDetails(event)}
    >
      <img
        src={event.EventImage}
        alt="event"
        style={{ width: "75px", height: "90px", borderRadius: "5px" }}
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
            fontSize: "15px",
            fontWeight: "600",
            fontFamily: "open sans",
            color: "#0f71a6",
            marginBottom: "10px",
          }}
        >
          {event.EventTitle}
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
          {event.EventOrganizer}
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
            width: "70%",
          }}
        >
          <p style={{ fontSize: "11px" }}>
            <CalendarMonthIcon
              style={{ marginRight: "4px", fontSize: "14px" }}
            />
            {event.EventDate}
          </p>
          <p style={{ fontSize: "11px" }}>
            <AccessTimeIcon style={{ marginRight: "4px", fontSize: "14px" }} />
            {event.EventTime}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default EventItem;
