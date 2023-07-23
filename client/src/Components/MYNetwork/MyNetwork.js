import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import ManageNetworkBar from "./ManageNetworkBar";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { useState } from "react";

function MyNetwork() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.get("http://localhost:5000/users/getAllUsers", config).then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#ebeced" }}>
      <MainHeader />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: "90vh",
        }}
      >
        <ManageNetworkBar />

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            height: "fit-content",
            width: "70%",
            marginTop: "30px",
            marginLeft: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "15px",
          }}
        >
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
          {users.map((user) => {
            return <UserProfileCard key={user._id} userData={user} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default MyNetwork;
