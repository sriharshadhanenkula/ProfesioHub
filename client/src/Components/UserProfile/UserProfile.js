import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Row } from "react-bootstrap";
import profileBackground from "../../assets/profileBackground.jpg";
import UserProfilePic from "../../assets/userProfilePic.jpg";
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

function UserProfile() {
  const UserProfileHeader = () => {
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
              marginTop: "-130px",
              padding: "30px",
              paddingBottom: "0px",
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
              src={UserProfilePic}
              alt="profile-avatar"
            />
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
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {faker.name.firstName()} {faker.name.lastName()}
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
                {
                  (faker.address.city(),
                  (faker.address.state(), faker.address.country()))
                }
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
                {faker.company.name()}
              </p>
            </div>
          </div>
        </Row>
      </div>
    );
  };

  const userBioCard = () => {
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
              fontSize: "22px",
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
  };

  const getWorkExperienceTimeLine = () => {
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
  };

  const getEducationTimeLine = () => {
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
  };

  const skillsCard = () => {
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
  };

  const projectSection = () => {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias accusantium ut perferendis. Nesciunt, qui consequatur
                officiis quidem consequuntur voluptatibus delectus dignissimos
                dolorum similique molestiae, animi ex totam cumque ea eius.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />

      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "75%",
              marginRight: "10px",
              marginBottom: "30px",
            }}
          >
            {UserProfileHeader()}
            {userBioCard()}
            {getWorkExperienceTimeLine()}
            {getEducationTimeLine()}
            {skillsCard()}
            {projectSection()}
          </div>

          <div style={{ backgroundColor: "lightcyan", width: "25%" }}>
            <p>Display</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UserProfile;
