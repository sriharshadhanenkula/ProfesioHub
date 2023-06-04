import React from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginPage.css";
import Header from "../Header/Header";
import myLoginImage from "../../assets/login-img-1.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

function LoginPage() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["userEmail"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Please fill all the fields!");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/users/login",
      data,
      config
    );

    if (res.status === 200 && res.data.message === "Login successful") {
      setCookie("userEmail", res.data.email, { path: "/" });
      //console.log(cookies.userEmail);
      navigate("/");
    } else if (
      res.status === 200 &&
      res.data.message === "Incorrect password"
    ) {
      toast.error("Incorrect password");
    } else if (res.status === 203) {
      toast.error("User not found");
    }
  };

  return (
    <>
      <Header />

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
                paddingTop: "50px",
              }}
            >
              <div>
                <h1
                  className="text-center"
                  style={{ fontSize: "26px", fontFamily: "open sans" }}
                >
                  Welcome to your professional community
                </h1>
                <Form className="mt-5">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
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
                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    variant="primary"
                    onClick={onClickSubmit}
                  >
                    Submit
                  </Button>
                  <ToastContainer />
                </Form>
              </div>

              <div className="mt-5">
                <p className="text-center">
                  New to ProfesioHub?
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    {" "}
                    Join Now
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

export default LoginPage;
