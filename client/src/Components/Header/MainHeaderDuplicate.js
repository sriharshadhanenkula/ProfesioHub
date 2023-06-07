import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import { faker } from "@faker-js/faker";
import { Container, Divider } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./myHeader.css";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function MainHeading() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
        <img
          style={{ height: "80px", width: "80px", borderRadius: "50%" }}
          src={faker.image.avatar()}
          alt="avatar"
        />
        <Typography>
          {userData.firstName} {userData.lastName}
        </Typography>
        <Typography>Student</Typography>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
      <Divider style={{ backgroundColor: "black" }} />
      <Typography>Account</Typography>
      <MenuItem onClick={handleMenuClose}>Settings & Privacy</MenuItem>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <MenuItem
        onClick={() => {
          removeCookie("userEmail");
          navigate("/login");
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "white",
              border: "none",
              boxShadow: "none",
              color: "#183552",
            }}
          >
            <Toolbar>
              <Typography
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                  src={logo}
                  alt="logo"
                />
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "red",
                }}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#eef3f8",
                    borderRadius: "20px",
                    padding: "5px",
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                  />
                  <InputBase
                    sx={{
                      marginLeft: "10px",
                      color: "grey",
                      fontSize: "14px",
                      fontFamily: "open sans",
                      fontWeight: "500",
                    }}
                    placeholder="Search.."
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon style={{ fontSize: "22px" }} />
                  <Typography
                    sx={{
                      fontSize: "8px",
                      fontFamily: "open sans",
                      fontWeight: "500",
                      color: "#011e3b",
                    }}
                  >
                    Home
                  </Typography>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PeopleIcon style={{ fontSize: "22px" }} />
                    <Typography
                      sx={{
                        fontSize: "8px",
                        fontFamily: "open sans",
                        fontWeight: "500",
                        color: "#011e3b",
                      }}
                    >
                      My Network
                    </Typography>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <WorkIcon style={{ fontSize: "22px" }} />
                    <Typography
                      sx={{
                        fontSize: "8px",
                        fontFamily: "open sans",
                        fontWeight: "500",
                        color: "#011e3b",
                      }}
                    >
                      Jobs
                    </Typography>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CommentIcon style={{ fontSize: "22px" }} />
                    <Typography
                      sx={{
                        fontSize: "8px",
                        fontFamily: "open sans",
                        fontWeight: "500",
                        color: "#011e3b",
                      }}
                    >
                      Messaging
                    </Typography>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={17}
                    color="error"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <NotificationsIcon style={{ fontSize: "22px" }} />
                    <Typography
                      sx={{
                        fontSize: "8px",
                        fontFamily: "open sans",
                        fontWeight: "500",
                        color: "#011e3b",
                      }}
                    >
                      Notifications
                    </Typography>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircle style={{ fontSize: "22px" }} />
                  <Typography
                    sx={{
                      fontSize: "8px",
                      fontFamily: "open sans",
                      fontWeight: "500",
                      color: "#011e3b",
                    }}
                  >
                    Me
                  </Typography>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </Container>
    </div>
  );
}
