import React from "react";
import { Form } from "react-bootstrap";
import "./SignUpPage.css";
import mySignUpImage from "../../assets/SignUp-image-2.jpg";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";

function SignUpPage() {
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
                  style={{ fontSize: "28px", width: "100%" }}
                >
                  Make the most of your professional life
                </h1>
                <Form className="mt-2">
                  <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
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
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    Submit
                  </Button>
                </Form>
              </div>

              <div className="mt-3">
                <p className="text-center">
                  Already on ProfesioHub ?{" "}
                  <a
                    href="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign In
                  </a>
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
