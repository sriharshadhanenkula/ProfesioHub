import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { faker } from "@faker-js/faker";
import Button from "@mui/material/Button";
import CommentIcon from "@mui/icons-material/Comment";
import { Container } from "@mui/material";
import { useState } from "react";

export default function UserPost(props) {
  const postData = props.postData;

  const [showFull, setShowFull] = useState(false);

  const maxWords = 20;
  const words = postData.content.split(" ");

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  return (
    <Card style={{ marginTop: "10px" }}>
      <CardHeader
        avatar={
          <Avatar style={{ width: "45px", height: "45px" }}>
            <img src={faker.image.avatar()} alt="avatar" width="45px" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              fontFamily: "open sans",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {faker.name.firstName()} {faker.name.lastName()}
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
              {faker.name.jobTitle()}
            </Typography>
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", fontFamily: "open sans" }}
          >
            {faker.date.past().toLocaleDateString()}
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
                style={{ color: "#047fc7", fontWeight: "bold" }}
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
                  style={{ color: "#047fc7", fontWeight: "bold" }}
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
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
        />
      )}

      {/* <CardMedia component="img" image={postData.image} alt="Paella dish" /> */}

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
            color: "#53575c",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#dfe5eb",
              color: "#458eed",
            },
          }}
        >
          <ThumbUpIcon style={{ fontSize: "22px" }} />
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
          <CommentIcon style={{ fontSize: "22px" }} />
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
          <TelegramIcon style={{ fontSize: "25px" }} />
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
