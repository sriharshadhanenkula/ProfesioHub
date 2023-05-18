import React from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginPage.css";

import myLoginImage from "../../assets/login-img-1.jpg";

function LoginPage() {
  return (
    <div className="Login-container">
      <div className="login-page-card">
        <div style={{ height: "600px", width: "500px", objectFit: "cover" }}>
          <img
            src={myLoginImage}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt="login-img"
          />
        </div>
        <div>
          <div
            style={{
              width: "500px",
              height: "600px",
              padding: "60px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h1 className="text-center" style={{ fontSize: "30px" }}>
                Welcome to ProfesioHub
              </h1>
              <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>
                <div className="mt-3">
                  <p style={{ textAlign: "right" }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="/forgot-password"
                    >
                      Forgot Password?
                    </a>
                  </p>
                </div>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Submit
                </Button>
              </Form>
            </div>

            <div className="mt-5">
              <p className="text-center">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
