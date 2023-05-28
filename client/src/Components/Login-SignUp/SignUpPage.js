import React from "react";
import { Form } from "react-bootstrap";
import "./SignUpPage.css";
import mySignUpImage from "../../assets/SignUp-image-2.jpg";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onClickSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      emailId === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: emailId,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/users/signup", data, config)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Account created successfully!");
          navigate("/login");
        } else if (res.status === 203) {
          toast.error("User already exists!");
        } else {
          toast.error("Error in creating account!");
        }
      })
      .catch((error) => {
        // Handle the error properly
        console.error(error);
        toast.error("Error in creating account!");
      });
  };

  return (
    <>
      <Header />

      <div className="SignUp-container">
        <div className="SignUp-page-card">
          <div
            style={{
              height: "650px",
              width: "550px",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={mySignUpImage}
              style={{ height: "83%", width: "83%", objectFit: "cover" }}
              alt="login-img"
            />
          </div>
          <div>
            <div
              style={{
                width: "500px",
                height: "600px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                paddingRight: "35px",
              }}
            >
              <div>
                <h1
                  className="text-center"
                  style={{ fontSize: "26px", fontFamily: "open sans" }}
                >
                  Make the most of your professional life
                </h1>
                <Form className="mt-2">
                  <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formGroupConfirmPassword"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                    onClick={onClickSubmit}
                  >
                    Submit
                  </Button>
                  <ToastContainer />
                </Form>
              </div>

              <div
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-center">
                  Already on ProfesioHub ?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
