import React from "react";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import "./ManageNetworkBar.css";

function ManageNetworkBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "white",
        marginTop: "30px",
        borderRadius: "10px",
        height: "fit-content",
        padding: "10px",
      }}
    >
      <Container>
        <p
          style={{
            fontFamily: "open sans",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {" "}
          Manage my network
        </p>

        <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
          <li
            className="manageNetworkBar__item"
            style={{
              backgroundColor: selectedItem === "People" ? "#e4e6eb" : "white",
            }}
            onClick={() => handleItemClick("People")}
          >
            <RiUserAddLine
              size={20}
              color="#414142"
              style={{ marginRight: "5px" }}
            />
            People you may know
          </li>
          <li
            className="manageNetworkBar__item"
            style={{
              backgroundColor:
                selectedItem === "Connections" ? "#e4e6eb" : "white",
            }}
            onClick={() => handleItemClick("Connections")}
          >
            <PeopleIcon style={{ marginRight: "5px", color: "#414142" }} />
            Connections
          </li>
          <li
            className="manageNetworkBar__item"
            style={{
              backgroundColor:
                selectedItem === "Universities" ? "#e4e6eb" : "white",
            }}
            onClick={() => handleItemClick("Universities")}
          >
            <FaUniversity
              size={20}
              color="#414142"
              style={{ marginRight: "5px" }}
            />
            Universities
          </li>
          <li
            className="manageNetworkBar__item"
            style={{
              backgroundColor: selectedItem === "Alumni" ? "#e4e6eb" : "white",
            }}
            onClick={() => handleItemClick("Alumni")}
          >
            <SchoolIcon style={{ marginRight: "5px", color: "#414142" }} />
            Find alumni
          </li>
        </ul>
        <div style={{ textAlign: "end" }}>
          <Button
            variant="outline-secondary"
            style={{
              marginBottom: "10px",
              borderRadius: "20px",
              fontSize: "10px",
            }}
            onClick={() => setSelectedItem(null)}
          >
            Clear all filters
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ManageNetworkBar;
