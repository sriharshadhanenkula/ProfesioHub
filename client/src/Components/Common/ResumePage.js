import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import { useCookies } from "react-cookie";
import ArticleIcon from "@mui/icons-material/Article";
import { Button } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

function ResumePage() {
  const [cookies] = useCookies(["userEmail"]);
  const [myUserAdditionalData, setMyUserAdditionalData] = useState([]);
  const [myDocument, setMyDocument] = useState([]);

  useEffect(() => {
    const userEmail = cookies.userEmail;
    const data = {
      email: userEmail,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/getUserAdditionalData", data, config)
      .then((res) => {
        if (res.status === 200) {
          setMyUserAdditionalData(res.data);
        }
      });
  }, [cookies.userEmail]);

  const uploadResume = async () => {
    console.log(myDocument);
    
  };
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    setMyDocument(event.target.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const displayToUploadResume = () => {
    return (
      <div>
        <h1
          style={{
            fontFamily: "open sans",
            fontWeight: "600",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "10px",
            // color: "#0f71a6",
          }}
        >
          You have not uploaded a resume yet.
        </h1>
        <h3
          style={{
            fontFamily: "open sans",
            fontWeight: "600",
            fontSize: "15px",
            textAlign: "center",
            marginTop: "10px",
            // color: "#0f71a6",
          }}
        >
          Upload your resume to apply for jobs.
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "10px",
              textTransform: "capitalize",
              fontFamily: "open sans",
              fontSize: "14px",
              marginBottom: "10px",
            }}
            onClick={handleClick}
          >
            Upload Resume
          </Button>
        </div>
      </div>
    );
  };

  const displayResume = () => {
    return (
      <div>
        <h1>Resume</h1>
        <h3>Click the button below to update your resume.</h3>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Update Resume
        </Button>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ebeced", minHeight: "100vh" }}>
      <MainHeader />
      <Container>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            marginTop: "30px",
            border: "1px solid #e4e4e4",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            marginBottom: "5px",
            padding: "12px",
            paddingBottom: "20px",
            height: "fit-content",
          }}
        >
          <h1
            style={{
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: "30px",

              marginBottom: "8px",
              color: "#0f71a6",
            }}
          >
            <ArticleIcon style={{ fontSize: "32px", marginRight: "10px" }} />
            Resume
          </h1>
          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#0f71a6",
              marginTop: "3px",
              marginBottom: "15px",
            }}
          />

          {myUserAdditionalData.resume === "" ||
          myUserAdditionalData.resume === undefined
            ? displayToUploadResume()
            : displayResume()}
        </div>
      </Container>
    </div>
  );
}

export default ResumePage;
