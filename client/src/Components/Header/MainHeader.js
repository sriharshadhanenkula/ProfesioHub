import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import EventIcon from "@mui/icons-material/Event";

function MainHeader() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "white" }}>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              src={logo}
              alt="logo"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#eef3f8",
                borderRadius: "20px",
                padding: "5px",
                marginLeft: "20px",
              }}
            >
              <SearchIcon
                sx={{
                  color: "#747574",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              />
              <InputBase
                sx={{
                  marginLeft: "10px",
                  color: "#747574",
                  fontSize: "14px",
                  fontFamily: "open sans",
                  fontWeight: "500",
                }}
                placeholder="Search.."
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div
            style={{
              width: "45%",
              marginLeft: "auto",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <HomeIcon style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">Home</p>
                </li>
              </Link>
              <Link
                to="/myNetwork"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <PeopleIcon style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">My Network</p>
                </li>
              </Link>
              <Link
                to="/jobs"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <WorkIcon style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">Jobs</p>
                </li>
              </Link>
              <Link
                to="/events"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <EventIcon style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">Events</p>
                </li>
              </Link>
              <Link
                to="/messaging"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <CommentIcon style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">Messaging</p>
                </li>
              </Link>

              <Link
                to="/myProfile"
                className="nav-Link-decoration"
                style={{ height: "30px" }}
              >
                <li className="list-item">
                  <AccountCircle style={{ fontSize: "22px" }} />
                  <p className="nav-item-paragraph">Me</p>
                </li>
              </Link>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainHeader;
