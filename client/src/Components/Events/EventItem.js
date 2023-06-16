import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function EventItem(props) {
  const event = props.event;

  return (
    <div
      key={event.id}
      style={{
        backgroundColor: "#ebeced",
        marginTop: "10px",
        padding: "12px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        paddingBottom: "2px",
      }}
    >
      <img
        src={event.image}
        alt="event"
        style={{ width: "70px", height: "70px", borderRadius: "10px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "12px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "open sans",
            color: "#3d3e40",
          }}
        >
          {event.title}
        </p>
        <p
          style={{
            fontSize: "12px",
            fontFamily: "open sans",
            fontWeight: "500",
          }}
        >
          <SchoolIcon style={{ color: "#575859", marginRight: "6px" }} />
          {event.organization}
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
            <PushPinIcon style={{ marginRight: "4px", fontSize: "16px" }} />
            {event.medium}
          </p>
          <p style={{ fontSize: "11px" }}>
            <CalendarMonthIcon
              style={{ marginRight: "4px", fontSize: "16px" }}
            />
            {event.date}
          </p>
          <p style={{ fontSize: "11px" }}>
            <AccessTimeIcon style={{ marginRight: "4px", fontSize: "16px" }} />
            {event.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
