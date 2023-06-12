import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TelegramIcon from "@mui/icons-material/Telegram";
import { faker } from "@faker-js/faker";

export default function UserPost() {
  return (
    <Card style={{ marginTop: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={faker.image.avatar()} alt="avatar" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" component="div">
            {faker.name.firstName()} {faker.name.lastName()}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              style={{ fontSize: "10px", marginTop: "0px", paddingTop: "0px" }}
            >
              Student
            </Typography>
          </Typography>
        }
        subheader="September 14, 2016"
        style={{ marginBottom: "5px", paddingBottom: "0px" }}
      />

      <CardContent style={{ marginTop: "0px", paddingTop: "0px" }}>
        <Typography variant="body2" color="text.secondary">
          {faker.lorem.paragraph()}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={faker.image.urlPicsumPhotos()}
        alt="Paella dish"
      />

      <CardActions
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", marginTop: "0px", paddingTop: "0px" }}
          >
            Like
          </Typography>
        </IconButton>

        <IconButton aria-label=" comments">
          <ModeCommentIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", marginTop: "0px", paddingTop: "0px" }}
          >
            Comment
          </Typography>
        </IconButton>

        <IconButton aria-label="share">
          <TelegramIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", marginTop: "0px", paddingTop: "0px" }}
          >
            Share
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
