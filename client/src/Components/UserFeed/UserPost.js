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
import TelegramIcon from "@mui/icons-material/Telegram";
import { faker } from "@faker-js/faker";
import Button from "@mui/material/Button";
import CommentIcon from '@mui/icons-material/Comment';
import { Container } from "@mui/material";

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

      <Container style={{ display: "flex", flexDirection: "row" }}>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        style={{
          fontSize: "10px",
          marginTop: "0px",
          paddingTop: "0px",
          textTransform: "capitalize",
          marginLeft: "10px",
        }}
      >
        2 Likes
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
        }}  
      >
        5 Comments
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
        }}
      >
        10 Shares
      </Typography>
      </Container>

      <hr style={{ marginTop: "0px", marginBottom: "0px" }} />
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "0px"
        }}
      >
        <Button aria-label="add to favorites" sx={{
        flexGrow: "1",
        color: "gray",
        }}>
          <ThumbUpIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              fontSize: "10px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
            }}
          >
            Like
          </Typography>
        </Button>

        <Button aria-label=" comments"
        sx={{
        flexGrow: "1",
        color: "gray",
        }}>
          <CommentIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            
            sx={{
              fontSize: "10px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
            }}
          >
            Comment
          </Typography>
        </Button>

        <Button aria-label="share" 
        sx={{
        flexGrow: "1",
        color: "gray",
        }}>
          <TelegramIcon />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              fontSize: "10px",
              marginTop: "0px",
              paddingTop: "0px",
              textTransform: "capitalize",
              marginLeft: "3px",
            }}
          >
            Share
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
