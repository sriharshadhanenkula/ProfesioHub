import React from "react";
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
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export function UserBioCard(userAdditionalData) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
          <EditIcon
            onClick={() => setIsEdit(true)}
            style={{ cursor: "pointer", fontSize: "18px" }}
          />
        </div>
        <div>
          {isEdit ? (
            <>
              <textarea
                style={{
                  width: "100%",
                  height: "100px",
                  resize: "none",
                  outline: "none",
                  fontFamily: "open sans",
                  fontSize: "15px",
                }}
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
              ></textarea>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#0f71a6",
                    fontFamily: "open sans",
                    fontWeight: "bold",
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                  onClick={() => {
                    setIsEdit(false);
                    const config = {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    };

                    const data = {
                      email: userAdditionalData.email,
                      about: textAreaValue,
                    };

                    axios
                      .put(
                        "http://localhost:5000/users/updateUserAdditionalDataAbout",
                        data,
                        config
                      )
                      .then((res) => {
                        if (res.status === 200) {
                          console.log(
                            "User additional data updated successfully"
                          );
                        }
                      });
                  }}
                >
                  Save
                </Button>
              </div>
            </>
          ) : (
            <p
              style={{
                fontFamily: "open sans",
                fontSize: "15px",
                textAlign: "justify",
              }}
            >
              {userAdditionalData.about}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function GetWorkExperienceTimeLine(userData) {
  const startDateYear = new Date(userData.startYear).getFullYear();
  const endDateYear = new Date(userData.endYear).getFullYear();
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
                {userData.university}
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
                {userData.startMonth}/{startDateYear} - {userData.endMonth}
                {"/"}
                {endDateYear}
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

export function GetEducationTimeLine(userData) {
  const startDateYear = new Date(userData.startYear).getFullYear();
  const endDateYear = new Date(userData.endYear).getFullYear();

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
                {userData.university}
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
                {userData.startMonth}/{startDateYear} - {userData.endMonth}
                {"/"}
                {endDateYear}
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

export function SkillsCard() {
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

export function ProjectSection() {
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
