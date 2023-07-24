import React from "react";
import MainHeader from "../Header/MainHeader";
import { Button, Container } from "@mui/material";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";
import UserPost from "../UserFeed/UserPost";
import { useEffect } from "react";
import "./MyItems.css";

function MyItems() {
  const [cookies] = useCookies(["userEmail"]);
  const [myChosenItem, setMyChosenItem] = useState("My Posts");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (myChosenItem === "My Posts" && userPosts.length === 0) {
      getUserPosts();
    }
  }, [myChosenItem]);

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
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
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
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
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
              }}
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
              }}
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
              }}
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
                color: "#4a4a4a",
                width: "100%",
                justifyContent: "flex-start",
              }}
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
              }}
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
              }}
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

          {myChosenItem === "Jobs Applied" ? <h1>Jobs Applied</h1> : null}
        </div>
      </Container>
    </div>
  );
}

export default MyItems;
