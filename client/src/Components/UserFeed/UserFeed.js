import React, { useEffect } from "react";
import AddPost from "./AddPost";
import UserPost from "./UserPost";
import axios from "axios";
import { useState } from "react";

function UserFeed(props) {
  const userData = props.userData;

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getAllPosts").then((res) => {
      if (res.status === 200) {
        setUserPosts(res.data);
      }
    });
  }, []);

  return (
    <div>
      <AddPost userData={userData} />

      {userPosts.map((post) => {
        return <UserPost postData={post} key={post._id} />;
      })}
    </div>
  );
}

export default UserFeed;
