import React from "react";
import { Form, Row } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { faker } from "@faker-js/faker";
import profileBackground from "../../assets/profileBackground.jpg";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export function UserProfileHeader(userData) {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(userData.firstName);

  const handleClose = () => {
    setShow(false);
  };

  const onClickSave = () => {
    setShow(false);
    console.log(firstName);
  };

  const UserProfileHeaderModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter Role" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>University</Form.Label>
              <Form.Control type="text" placeholder="Enter University" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" placeholder="Enter University" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>

          <button className="btn btn-primary" onClick={onClickSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
      <Row>
        <img
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
          src={profileBackground}
          alt="profile-cover-page"
        />
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px",
            paddingBottom: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-130px",
            }}
          >
            <img
              style={{
                width: "170px",
                height: "170px",
                border: "5px solid white",
                objectFit: "cover",
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "1px",
              }}
              src={userData.profilePicture}
              alt="profile-avatar"
            />
          </div>
          <EditIcon onClick={handleShow} style={{ cursor: "pointer" }} />
          {UserProfileHeaderModal()}
        </div>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "30px",
            paddingTop: "10px",
            paddingBottom: "0px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "open sans",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {userData.firstName} {userData.lastName}
            </h1>
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              {userData.role}
            </p>

            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              {userData.city}, {userData.state},{userData.country}
            </p>
          </div>
          <div
            style={{
              maxWidth: "45%",
              minWidth: "36%",
            }}
          >
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              <img
                style={{
                  width: "60px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src={faker.image.avatar()}
                alt="profile-avatar"
              />
              {userData.university}
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
}

export function userBioCard() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          marginTop: "15px",
          marginBottom: "15px",
          padding: "15px",
          paddingLeft: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "open sans",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          About
        </h1>
        <p
          style={{
            fontFamily: "open sans",
            fontSize: "15px",
            textAlign: "justify",
          }}
        >
          {faker.lorem.paragraph()}
        </p>
      </div>
    </div>
  );
}

export function getWorkExperienceTimeLine() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "15px",
        marginBottom: "15px",
        padding: "10px",
        paddingLeft: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "open sans",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        Work Experience
      </h1>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <h1
                style={{
                  fontFamily: "open sans",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {faker.company.name()}
              </h1>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                }}
              >
                {faker.name.jobTitle()}
              </p>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                }}
              >
                {faker.date.past().toDateString()} -{" "}
                {faker.date.past().toDateString()}
              </p>

              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                  textAlign: "justify",
                }}
              >
                {faker.lorem.paragraph()}
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export function getEducationTimeLine() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "15px",
        marginBottom: "15px",
        padding: "10px",
        paddingLeft: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "open sans",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        Education
      </h1>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <h1
                style={{
                  fontFamily: "open sans",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {faker.company.name()}
              </h1>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                }}
              >
                {faker.name.jobTitle()}
              </p>
              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                }}
              >
                {faker.date.past().toDateString()} -{" "}
                {faker.date.past().toDateString()}
              </p>

              <p
                style={{
                  fontFamily: "open sans",
                  fontSize: "15px",
                  textAlign: "justify",
                }}
              >
                {faker.lorem.paragraph()}
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export function skillsCard() {
  const mySkills = [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "Firebase",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Microsoft Office",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Word",
    "Windows",
    "Linux",
    "MacOS",
    "Android",
    "iOS",
    "Arduino",
    "Raspberry Pi",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Microsoft Office",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Word",
    "Windows",
    "Linux",
    "MacOS",
    "Android",
    "iOS",
    "Arduino",
    "Raspberry Pi",
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "15px",
        marginBottom: "15px",
        padding: "10px",
        paddingLeft: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "open sans",
          fontWeight: "bold",
        }}
      >
        Skills
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {mySkills.map((skill) => (
          <div
            style={{
              backgroundColor: "#ebeced",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "5px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
              }}
            >
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function projectSection() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "15px",
        marginBottom: "15px",
        padding: "10px",
        paddingLeft: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "open sans",
          fontWeight: "bold",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card>
          <CardMedia
            component="img"
            image={faker.image.image()}
            alt="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              accusantium ut perferendis. Nesciunt, qui consequatur officiis
              quidem consequuntur voluptatibus delectus dignissimos dolorum
              similique molestiae, animi ex totam cumque ea eius.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
