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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  enterCredentials,
  enterYourDetails,
  enterYourLocation,
  enterYourRole,
} from "./SignUpPageUserInput";

function SignUpPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [num, setNum] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [role, setRole] = useState("");
  const [university, setUniversity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState(null);
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState(null);

  const onClickSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: emailId,
      password: password,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode,
      role: role,
      university: university,
      startMonth: startMonth,
      startYear: startYear,
      endMonth: endMonth,
      endYear: endYear,
    };
    console.log(data);

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

  const handleStartDateChange = (date) => {
    setStartYear(date);
  };

  const handleEndDateChange = (date) => {
    setEndYear(date);
  };

  const CheckForValidationsForStartDate = (e) => {
    e.preventDefault();
    setEndMonth(null);
    setEndYear(null);
    if (startMonth === "" || startYear === null) {
      toast.error("Please fill all the fields!");
      return;
    }

    onClickSubmit(e);
  };

  const enterStartDate = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label>Start month</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
            >
              <option>Select month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Start year</Form.Label>
            <DatePicker
              selected={startYear}
              onChange={handleStartDateChange}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Select year"
              className="form-control"
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="transparent"
              className="mt-3"
              style={{
                width: "30%",
                border: "1px solid black",
              }}
              onClick={() => setNum(num - 1)}
            >
              Back
            </Button>
            <Button
              variant="primary"
              type="submit"
              className=" mt-3"
              style={{
                width: "30%",
              }}
              onClick={CheckForValidationsForStartDate}
            >
              Register
            </Button>
          </div>

          <ToastContainer />
        </Form>
      </div>
    );
  };

  const CheckForValidationsForStartDateAndEndDate = (e) => {
    e.preventDefault();
    if (
      startMonth === "" ||
      startYear === null ||
      endMonth === "" ||
      endYear === null ||
      university === ""
    ) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (startYear > endYear) {
      toast.error("Start Year cannot be greater than end Year!");
      return;
    } else if (startYear.getFullYear() === endYear.getFullYear()) {
      if (parseInt(startMonth) > parseInt(endMonth)) {
        toast.error("Start date cannot be greater than end date!");
        return;
      }
      onClickSubmit(e);
    }

    onClickSubmit(e);
  };

  const enterStartAndEndDate = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label>University / College</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </Form.Group>
          <p className="mt-2" style={{ fontSize: "16px" }}>
            {" "}
            Start Date
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Group controlId="formGroupFirstName">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setStartMonth(e.target.value)}
                value={startMonth}
              >
                <option>Select month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formDate">
              <DatePicker
                selected={startYear}
                onChange={handleStartDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select year"
                className="form-control"
              />
            </Form.Group>
          </div>

          <p className="mt-4" style={{ fontSize: "16px" }}>
            {" "}
            Expected Date
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Group controlId="formGroupFirstName">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setEndMonth(e.target.value)}
                value={endMonth}
              >
                <option>Select month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formDate">
              <DatePicker
                selected={endYear}
                onChange={handleEndDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select year"
                className="form-control"
              />
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="transparent"
              className="mt-3"
              style={{
                width: "30%",
                border: "1px solid black",
              }}
              onClick={() => setNum(num - 2)}
            >
              Back
            </Button>
            <Button
              variant="primary"
              type="submit"
              className=" mt-3"
              style={{
                width: "30%",
              }}
              onClick={CheckForValidationsForStartDateAndEndDate}
            >
              Register
            </Button>
          </div>

          <ToastContainer />
        </Form>
      </div>
    );
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
                height: "500px",
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
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {num === 0 &&
                    enterCredentials(
                      emailId,
                      password,
                      confirmPassword,
                      setEmailId,
                      setPassword,
                      setConfirmPassword,
                      setNum,
                      num
                    )}
                  {num === 1 &&
                    enterYourDetails(
                      firstName,
                      lastName,
                      setFirstName,
                      setLastName,
                      setNum,
                      num
                    )}
                  {num === 2 &&
                    enterYourLocation(
                      city,
                      state,
                      country,
                      zipCode,
                      setCity,
                      setState,
                      setCountry,
                      setZipCode,
                      setNum,
                      num
                    )}
                  {num === 3 &&
                    enterYourRole(
                      role,
                      university,
                      setRole,
                      setUniversity,
                      setNum,
                      num
                    )}
                  {num === 4 && enterStartDate()}
                  {num === 5 && enterStartAndEndDate()}
                </div>
              </div>

              <div
                className="mt-5"
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
