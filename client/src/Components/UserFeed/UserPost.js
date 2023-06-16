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
import CommentIcon from "@mui/icons-material/Comment";
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
              Student
            </Typography>
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ fontSize: "10px", fontFamily: "open sans" }}
          >
            September 14, 2016
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
            fontSize: "12px",
            color: "#141414",
          }}
        >
          {faker.lorem.paragraph()}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={faker.image.urlPicsumPhotos()}
        alt="Paella dish"
      />

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
          2 Likes
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
              fontFamily: "open sans",
            }}
          >
            <TelegramIcon
              style={{ color: "#913226", fontSize: "14px", marginRight: "5px" }}
            />
            10 Shares
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
          <ThumbUpIcon style={{ fontSize: "18px" }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "10px",
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
          <CommentIcon style={{ fontSize: "17px" }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "10px",
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
          <TelegramIcon style={{ fontSize: "20px" }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "10px",
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
