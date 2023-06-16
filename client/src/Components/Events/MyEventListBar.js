import React from "react";


function MyEventListBar(props) {

  const eventData =  props.myEventsData || [];

  const displaySingleEvent = (event) => {

    return(
      <div style={{backgroundColor:"white"}}>
<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src={event.image} alt="event" style={{width: "50px", height: "50px", borderRadius: "10px"}}/>
          <div style={{display: "flex", flexDirection: "column", marginLeft: "10px"}}>
            <p style={{fontSize: "12px", fontWeight: "bold"}}>{event.title}</p>
            <p style={{fontSize: "10px"}}>{event.date}</p>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <p style={{fontSize: "10px"}}>{event.time}</p>
          <p style={{fontSize: "10px"}}>{event.location}</p>
        </div>
      </div>
      </div>
      

    )


  }


  return (
    <div
      style={{
        width: "40%",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "15px",
        overflowY: "scroll",
        height: "80vh",

      }}
    >

    {eventData.map((event) => displaySingleEvent(event))}
    </div>
  );
}

export default MyEventListBar;
