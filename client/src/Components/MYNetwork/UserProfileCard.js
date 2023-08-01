import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserProfileCard(props) {
  const { userData, setConnections } = props;
  const [cookies] = useCookies(["userEmail"]);
  const email = cookies.userEmail;

  const onClickConnectButton = async () => {
    const data = {
      email: email,
      connectEmail: userData.email,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/sendConnectionRequest", data, config)
      .then((res) => {
        if (res.status === 200) {
          setConnections(res.data);
          toast.success("Connected successfully!");
        } else {
          toast.error("Error sending connection request!");
        }
      });
  };

  return (
    <div
      style={{
        width: "22%",
        borderRadius: "10px",
        border: "1px solid #e5e5e5",
        height: "fit-content",
        margin: "10px",
      }}
    >
      <Row>
        <img
          style={{
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            width: "100%",
            height: "100%",
          }}
          src={faker.image.imageUrl(300, 100, "people", true, true)}
          alt="profile"
        />
      </Row>
      <Row>
        <Container>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10%",
              marginBottom: "10px",
            }}
          >
            <img
              src={userData.profilePicture}
              alt="profile"
              style={{ borderRadius: "50%", width: "95px", height: "80px" }}
            />
          </Row>

          <div style={{ paddingBottom: "10px", paddingLeft: "2px" }}>
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              {userData.firstName} {userData.lastName}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "11px",
                textAlign: "center",
                color: "#747574",
                marginBottom: "10px",
              }}
            >
              {userData.university}
            </p>
            <Typography sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "50px",
                  height: "30px",
                  width: "100px",
                }}
                onClick={onClickConnectButton}
              >
                Connect
              </Button>
              <ToastContainer />
            </Typography>
          </div>
        </Container>
      </Row>
    </div>
  );
}

export default UserProfileCard;
