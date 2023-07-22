import React from "react";
import MainHeader from "../Header/MainHeader";
import { Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function PostJob() {
  const [cookies] = useCookies(["userEmail"]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("Full Time");
  const [jobIndustry, setJobIndustry] = useState("");
  const [jobExperienceLevel, setJobExperienceLevel] = useState("");
  const [jobEducationLevel, setJobEducationLevel] = useState("High School");
  const [jobSkills, setJobSkills] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [jobCompanyWebsite, setJobCompanyWebsite] = useState("");
  const [jobApplyBy, setJobApplyBy] = useState("");

  const onClickPostJob = () => {
    const data = {
      email: cookies.userEmail,
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      jobLocation: jobLocation,
      jobType: jobType,
      jobIndustry: jobIndustry,
      jobExperienceLevel: jobExperienceLevel,
      jobEducationLevel: jobEducationLevel,
      jobSkills: jobSkills,
      jobSalary: jobSalary,
      jobCompany: jobCompany,
      jobCompanyWebsite: jobCompanyWebsite,
      jobApplyBy: jobApplyBy,
      postedOn: new Date().toLocaleDateString(),
    };

    if (
      jobTitle === "" ||
      jobDescription === "" ||
      jobLocation === "" ||
      jobIndustry === "" ||
      jobExperienceLevel === "" ||
      jobSkills === "" ||
      jobSalary === "" ||
      jobCompany === "" ||
      jobCompanyWebsite === "" ||
      jobApplyBy === ""
    ) {
      toast.error("Please fill all the fields!");
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/jobs/addJob", data, config)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Job Posted Successfully!");
          setJobTitle("");
          setJobDescription("");
          setJobLocation("");
          setJobType("Full Time");
          setJobIndustry("");
          setJobExperienceLevel("");
          setJobEducationLevel("High School");
          setJobSkills("");
          setJobSalary("");
          setJobCompany("");
          setJobCompanyWebsite("");
          setJobApplyBy("");
        } else {
          toast.error("Error while posting job!");
        }
      });
  };

  return (
    <div style={{ backgroundColor: "#ebeced", paddingBottom: "30px" }}>
      <MainHeader />
      <Container>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: "30px",
            padding: "25px",
            paddingLeft: "40px",
            paddingRight: "40px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontFamily: "open sans",
              fontSize: "30px",
              fontWeight: "600",
              color: "#0f71a6",
            }}
          >
            Post a Job
          </h1>

          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#0f71a6",
              border: "none",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />

          <p
            style={{
              fontFamily: "open sans",
              fontSize: "20px",
              fontWeight: "600",
              color: "#0f71a6",
            }}
          >
            Reach the quality candidates you can't find anywhere else.
          </p>

          <p
            style={{
              fontFamily: "open sans",
              fontSize: "15px",
              fontWeight: "400",
              color: "#0f71a6",
            }}
          >
            Get started by telling us about your company and the job you're
            hiring for.
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Title"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Job Description"
                style={{ height: "200px", textJustify: "justify" }}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Location"
                onChange={(e) => setJobLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setJobType(e.target.value)}
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Temporary</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Industry</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Industry"
                onChange={(e) => setJobIndustry(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Experience Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Experience Level"
                onChange={(e) => setJobExperienceLevel(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Education Level</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setJobEducationLevel(e.target.value)}
              >
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PHD</option>
                <option>None</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Skills</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter job skills"
                onChange={(e) => setJobSkills(e.target.value)}
                style={{ height: "100px", textJustify: "justify" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Salary"
                onChange={(e) => setJobSalary(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Company"
                onChange={(e) => setJobCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Company Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Company Website"
                onChange={(e) => setJobCompanyWebsite(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Apply By</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Job Apply By"
                onChange={(e) => setJobApplyBy(e.target.value)}
              />
            </Form.Group>
          </Form>
          <ToastContainer />
          <button
            onClick={onClickPostJob}
            style={{
              backgroundColor: "#0f71a6",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
              fontFamily: "open sans",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Post Job
          </button>
        </div>
      </Container>
    </div>
  );
}

export default PostJob;
