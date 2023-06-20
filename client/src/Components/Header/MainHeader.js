import React from "react";
import { Navbar } from "react-bootstrap";
import Button from "@mui/material/Button";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

function MainHeader() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [cookies, removeCookie] = useCookies(["userEmail"]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userEmail = cookies.userEmail;

    if (userEmail === undefined) {
      navigate("/login");
    } else {
      const data = {
        email: userEmail,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post("http://localhost:5000/users/getUserDetails", data, config)
        .then((res) => {
          if (res.status === 200) {
            setUserData(res.data);
          } else {
            navigate("/login");
          }
        });
    }
  }, [cookies.userEmail, navigate]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
              alignItems: "center",
              margin: "0px",
              padding: "0px",
            }}
          >
            <Link to="/" className="nav-Link-decoration">
              <Button
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
              >
                <HomeIcon style={{ fontSize: "22px" }} />
                <p className="nav-item-paragraph">Home</p>
              </Button>
            </Link>

            <Link to="/myNetwork" className="nav-Link-decoration">
              <Button
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
              >
                <PeopleIcon style={{ fontSize: "22px" }} />
                <p className="nav-item-paragraph">My Network</p>
              </Button>
            </Link>

            <Link to="/jobs" className="nav-Link-decoration">
              <Button
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
              >
                <WorkIcon style={{ fontSize: "22px" }} />
                <p className="nav-item-paragraph">Jobs</p>
              </Button>
            </Link>

            <Link to="/events" className="nav-Link-decoration">
              <Button
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
              >
                <EventIcon style={{ fontSize: "22px" }} />
                <p className="nav-item-paragraph">Events</p>
              </Button>
            </Link>

            <Link to="/messaging" className="nav-Link-decoration">
              <Button
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
              >
                <CommentIcon style={{ fontSize: "22px" }} />
                <p className="nav-item-paragraph">Messaging</p>
              </Button>
            </Link>

            <Link className="nav-Link-decoration">
              <Button
                onClick={handleClick}
                className="list-item"
                sx={{
                  textTransform: "capitalize",
                  color: "#40576e",
                  "&:hover": {
                    color: "#1d2b38",
                  },
                }}
                style={{
                  textAlign: "center",
                }}
              >
                <AccountCircle
                  style={{
                    fontSize: "22px",
                  }}
                />
                <p className="nav-item-paragraph">My profile</p>
              </Button>
            </Link>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "250px",
                },
              }}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={faker.image.avatar()}
                  alt="profile"
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "open sans",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "15px",
                    marginBottom: "5px",
                  }}
                >
                  {userData.firstName} {` `}
                  {userData.lastName}
                </p>
                <p>{userData.role}</p>
                <Button
                  variant="outlined"
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    height: "30px",
                    fontSize: "12px",
                    fontFamily: "open sans",
                    fontWeight: "600",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  View Profile
                </Button>
              </Container>

              <MenuItem
                onClick={handleClose}
                style={{
                  fontSize: "14px",
                  fontFamily: "open sans",
                  fontWeight: "500",
                }}
              >
                Resume
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{
                  fontSize: "14px",
                  fontFamily: "open sans",
                  fontWeight: "500",
                }}
              >
                Saved jobs
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{
                  fontSize: "14px",
                  fontFamily: "open sans",
                  fontWeight: "500",
                }}
              >
                Saved events
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{
                  fontSize: "14px",
                  fontFamily: "open sans",
                  fontWeight: "500",
                }}
              >
                Help
              </MenuItem>
              <MenuItem>
                <Button
                  variant="outlined"
                  onClick={() => {
                    removeCookie("userEmail");
                    navigate("/login");
                  }}
                  style={{
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontFamily: "open sans",
                    fontWeight: "500",
                  }}
                >
                  Sign Out
                </Button>
              </MenuItem>
            </Menu>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
