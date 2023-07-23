import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import TelegramIcon from "@mui/icons-material/Telegram";
import Button from "@mui/material/Button";
import CommentIcon from "@mui/icons-material/Comment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { LiaTelegram } from "react-icons/lia";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";

export default function UserPost(props) {
  const postData = props.postData;

  const [showFull, setShowFull] = useState(false);
  const [userPostDetails, setUserPostDetails] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const maxWords = 20;
  const words = postData.content.split(" ");

  useEffect(() => {
    const userPostedEmail = postData.email;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "http://localhost:5000/users/getUserDetails",
        { email: userPostedEmail },
        config
      )
      .then((res) => {
        if (res.status === 200) {
          setUserPostDetails(res.data);
        }
      });
  }, [postData.email]);

  useEffect(() => {
    const userPostedEmail = postData.email;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "http://localhost:5000/users/getIsBookmarked",
        { email: userPostedEmail, postId: postData._id },
        config
      )
      .then((res) => {
        if (res.status === 200) {
          setIsBookmarked(res.data);
        }
      });
  }, [postData._id, postData.email]);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  const onClickBookMark = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "http://localhost:5000/users/bookmarkPost",
        { email: userPostDetails.email, postId: postData._id },
        config
      )
      .then((res) => {
        if (res.status === 200) {
          setIsBookmarked(res.data);
        }
      });
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card style={{ marginTop: "10px" }}>
      <CardHeader
        avatar={
          <Avatar style={{ width: "45px", height: "45px" }}>
            <img
              src={userPostDetails.profilePicture}
              alt="avatar"
              width="45px"
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {isBookmarked ? (
              <GoBookmarkFill onClick={onClickBookMark} />
            ) : (
              <GoBookmark onClick={onClickBookMark} />
            )}
          </IconButton>
        }
        title={
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            {userPostDetails.firstName} {userPostDetails.lastName}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              style={{
                fontSize: "10px",
                marginTop: "0px",
                paddingTop: "0px",
                fontFamily: "open sans",
              }}
            >
              {userPostDetails.role}
            </Typography>
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", fontFamily: "open sans" }}
          >
            {postData.date}
          </Typography>
        }
        style={{ marginBottom: "4px", paddingBottom: "0px" }}
      />

      <CardContent
        style={{
          marginTop: "0px",
          paddingTop: "0px",
          marginBottom: "5px",
          paddingBottom: "4px",
        }}
      >
        <Typography
          variant="body2"
          color="#232423"
          style={{
            fontFamily: "open sans",
            fontSize: "13px",
            color: "#232423",
            textAlign: "justify",
          }}
        >
          {showFull ? (
            <>
              {postData.content}{" "}
              <span
                style={{
                  color: "#047fc7",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={toggleShowFull}
              >
                Read less...
              </span>
            </>
          ) : (
            <>
              {words.slice(0, maxWords).join(" ")}
              {words.length > maxWords && (
                <span
                  style={{
                    color: "#047fc7",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={toggleShowFull}
                >
                  {` `} ... Read more
                </span>
              )}
            </>
          )}
        </Typography>
      </CardContent>

      {postData.image && (
        <CardMedia
          component="img"
          image={postData.image}
          alt="Paella dish"
          style={{ height: "360px", width: "100%", objectFit: "cover" }}
        />
      )}

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.secondary"
          style={{
            fontSize: "10px",
            marginTop: "0px",
            paddingTop: "0px",
            textTransform: "capitalize",
            marginLeft: "10px",
            fontFamily: "open sans",
          }}
        >
          <ThumbUpIcon
            style={{ color: "#458eed", fontSize: "14px", marginRight: "5px" }}
          />
          {postData.likes} Likes
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{
              fontSize: "10px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "10px",
              fontFamily: "open sans",
            }}
          >
            <CommentIcon
              style={{ color: "#026e09", fontSize: "14px", marginRight: "5px" }}
            />
            {postData.comments} Comments
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{
              fontSize: "10px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "10px",
              fontFamily: "open sans",
            }}
          >
            <TelegramIcon
              style={{ color: "#913226", fontSize: "14px", marginRight: "5px" }}
            />
            {postData.shares} Shares
          </Typography>
        </div>
      </Container>

      <hr style={{ marginTop: "0px", marginBottom: "0px" }} />
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "0px",
          padding: "3px",
        }}
      >
        <Button
          aria-label="add to favorites"
          sx={{
            flexGrow: "1",
            color: isClicked ? "#458eed" : "#53575c",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#dfe5eb",
              color: "#458eed",
            },
          }}
          onClick={handleClick}
        >
          <ThumbUpOffAltIcon style={{ fontSize: "23px" }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
              fontFamily: "open sans",
              fontWeight: "600",
            }}
          >
            Like
          </Typography>
        </Button>

        <Button
          aria-label=" comments"
          sx={{
            flexGrow: "1",
            color: "#53575c",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#dfe5eb",
              color: "#026e09",
            },
          }}
        >
          <ChatBubbleOutlineIcon style={{ fontSize: "22px" }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
              fontFamily: "open sans",
              fontWeight: "600",
            }}
          >
            Comment
          </Typography>
        </Button>

        <Button
          aria-label="share"
          sx={{
            flexGrow: "1",
            color: "#53575c",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#dfe5eb",
              color: "#913226",
            },
          }}
        >
          <LiaTelegram style={{ fontSize: "23px" }} />

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
              fontFamily: "open sans",
              fontWeight: "600",
            }}
          >
            Share
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
