import React from "react";
import MainHeader from "../Header/MainHeader";
import { Button, Container } from "@mui/material";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";
import UserPost from "../UserFeed/UserPost";
import { useEffect } from "react";
import "./MyItems.css";
import {
  displayJobsApplied,
  displayBookmarkJobs,
  displayEventsRegistered,
  displayBookmarkEvents,
  displayJobsPosted,
  displayEventsPosted,
} from "./MyItemsFunctions";

function MyItems() {
  const [cookies] = useCookies(["userEmail"]);
  const [myChosenItem, setMyChosenItem] = useState("My Posts");
  const [userPosts, setUserPosts] = useState([]);
  const [myUserAdditionalData, setMyUserAdditionalData] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [myBookmarkedPosts, setMyBookmarkedPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const email = cookies.userEmail;

  useEffect(() => {
    getUserPosts();
    getMyUserAdditionalData();
    getAllJobs();
    getAllEvents();
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickMyPosts = async (event) => {
    event.preventDefault();
    setMyChosenItem("My Posts");
    getUserPosts();
  };

  const getUserPosts = async () => {
    const userEmail = cookies.userEmail;
    const data = {
      email: userEmail,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/getUserPosts", data, config)
      .then((res) => {
        if (res.status === 200) {
          setUserPosts(res.data);
        }
      });
  };

  const getMyUserAdditionalData = async () => {
    const userEmail = cookies.userEmail;
    const data = {
      email: userEmail,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getUserAdditionalData", data, config)
      .then((res) => {
        if (res.status === 200) {
          setMyUserAdditionalData(res.data);
        }
      });
  };

  const getAllJobs = async () => {
    axios.get("http://localhost:5000/jobs/getMyJobs").then((res) => {
      setAllJobs(res.data);
    });
  };

  const getAllEvents = async () => {
    axios.get("http://localhost:5000/events/getAllEvents").then((res) => {
      setAllEvents(res.data);
    });
  };

  const getAllPosts = async () => {
    axios.get("http://localhost:5000/getAllPosts").then((res) => {
      setAllPosts(res.data);
    });
  };

  const onClickBookmarkPosts = async (event) => {
    event.preventDefault();
    setMyChosenItem("BookmarkPosts");

    allPosts.forEach((post) => {
      if (myUserAdditionalData.bookmarks.includes(post._id)) {
        setMyBookmarkedPosts((myBookmarkedPosts) => [
          ...myBookmarkedPosts,
          post,
        ]);
      }
    });
  };

  const myItemsFilter = () => {
    return (
      <div
        style={{
          backgroundColor: "white",
          width: "30%",
          marginTop: "30px",
          border: "1px solid #e4e4e4",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          marginBottom: "5px",
          marginRight: "8px",
          height: "fit-content",
          padding: "10px",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1 className="myItems-Bookmarks-filter-heading">My Items</h1>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: myChosenItem === "My Posts" ? "white" : "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor: myChosenItem === "My Posts" ? "#5ab4e6" : "",
              }}
              onClick={onClickMyPosts}
            >
              My Posts
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: myChosenItem === "Jobs Applied" ? "white" : "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "Jobs Applied" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("Jobs Applied")}
            >
              Jobs Applied
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "Events Registered" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("Events Registered")}
            >
              Events Registered
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "Jobs Posted" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("Jobs Posted")}
            >
              Jobs Posted
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "Events Posted" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("Events Posted")}
            >
              Events Posted
            </Button>
            <h1 className="myItems-Bookmarks-filter-heading">Bookmarks</h1>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: myChosenItem === "BookmarkPosts" ? "white" : "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "BookmarkPosts" ? "#5ab4e6" : "",
              }}
              onClick={onClickBookmarkPosts}
            >
              Posts
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "BookmarkJobs" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("BookmarkJobs")}
            >
              Jobs
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                fontFamily: "open sans",
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor:
                  myChosenItem === "BookmarkEvents" ? "#5ab4e6" : "",
              }}
              onClick={() => setMyChosenItem("BookmarkEvents")}
            >
              Events
            </Button>
          </div>
        </Container>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ebeced" }}>
      <MainHeader />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: "91vh",
        }}
      >
        {myItemsFilter()}
        <div
          style={{
            backgroundColor: "white",
            width: "70%",
            marginTop: "30px",
            border: "1px solid #e4e4e4",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            marginBottom: "5px",
            padding: "10px",
            paddingBottom: "20px",
            height: "fit-content",
          }}
        >
          {myChosenItem === "My Posts" && userPosts.length !== 0
            ? userPosts.map((post) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                    }}
                  >
                    <UserPost key={post._id} postData={post} />
                  </div>
                </div>
              ))
            : null}

          {myChosenItem === "Jobs Applied"
            ? displayJobsApplied(allJobs, email)
            : null}
          {myChosenItem === "Events Registered"
            ? displayEventsRegistered(allEvents, email)
            : null}
          {myChosenItem === "Jobs Posted"
            ? displayJobsPosted(allJobs, email)
            : null}
          {myChosenItem === "Events Posted"
            ? displayEventsPosted(allEvents, email)
            : null}
          {myChosenItem === "BookmarkPosts"
            ? myBookmarkedPosts.map((post) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                    }}
                  >
                    <UserPost key={post._id} postData={post} />
                  </div>
                </div>
              ))
            : null}
          {myChosenItem === "BookmarkJobs"
            ? displayBookmarkJobs(allJobs, email, myUserAdditionalData)
            : null}
          {myChosenItem === "BookmarkEvents"
            ? displayBookmarkEvents(allEvents, email, myUserAdditionalData)
            : null}
        </div>
      </Container>
    </div>
  );
}

export default MyItems;
