import React from "react";
import AddPost from "./AddPost";
import UserPost from "./UserPost";

function UserFeed() {
  return (
    <div>
      <AddPost />

      <UserPost />
      <UserPost />
    </div>
  );
}

export default UserFeed;
