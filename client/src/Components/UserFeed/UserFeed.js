import React from "react";
import AddPost from "./AddPost";
import UserPost from "./UserPost";

function UserFeed() {
  return (
    <div style={{ margin: "14px", marginTop: "16px" }}>
      <AddPost />

      <UserPost />
    </div>
  );
}

export default UserFeed;
