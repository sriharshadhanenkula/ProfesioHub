import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

function UserProfileCard(props) {
  const userData = props.userData;

  return (
    <div
      style={{
        width: "22%",
        borderRadius: "10px",
        border: "1px solid #e5e5e5",
        maxHeight: "300px",
        marginBottom: "10px",
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
            }}
          >
            <img
              src={faker.image.avatar()}
              alt="profile"
              style={{ borderRadius: "50%", width: "50%" }}
            />
          </Row>

          <div className="mt-3 mb-3">
            <p
              style={{
                fontFamily: "open sans",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {faker.name.firstName()} {faker.name.lastName()}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "11px",
                textAlign: "center",
                color: "#747574",
              }}
            >
              Graduate Student at University at Albany
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
              >
                Connect
              </Button>
            </Typography>
          </div>
        </Container>
      </Row>
    </div>
  );
}

export default UserProfileCard;
