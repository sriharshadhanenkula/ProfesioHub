import React from "react";
import AddPost from "./AddPost";
import UserPost from "./UserPost";

function UserFeed(props) {
  const userData = props.userData;
  return (
    <div>
      <AddPost userData={userData} />

      <UserPost />
      <UserPost />
      <UserPost />
    </div>
  );
}

export default UserFeed;
