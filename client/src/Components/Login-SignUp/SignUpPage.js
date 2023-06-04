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
  const { startMonth, setStartMonth } = useState("");
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

    /* const config = {
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
      }); */
  };

  const enterCredentials = () => {
    return (
      <Form className="mt-2">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="w-100 mt-3"
          onClick={(e) => {
            e.preventDefault();
            if (emailId === "" || password === "" || confirmPassword === "") {
              toast.error("Please fill all the fields!");
              return;
            }

            if (password !== confirmPassword) {
              toast.error("Passwords do not match!");
              return;
            }

            setNum(num + 1);
          }}
        >
          Next
        </Button>
        <ToastContainer />
      </Form>
    );
  };

  const enterYourDetails = () => {
    return (
      <Form className="mt-2">
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            className=" mt-3"
            style={{
              width: "30%",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (firstName === "" || lastName === "") {
                toast.error("Please fill all the fields!");
                return;
              }

              setNum(num + 1);
            }}
          >
            Next
          </Button>
        </div>

        <ToastContainer />
      </Form>
    );
  };

  const enterYourLocation = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Zip code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
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
            className=" mt-3"
            style={{
              width: "30%",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (
                city === "" ||
                country === "" ||
                state === "" ||
                zipCode === ""
              ) {
                toast.error("Please fill all the fields!");
                return;
              }

              setNum(num + 1);
            }}
          >
            Next
          </Button>
        </div>

        <ToastContainer />
      </Form>
    );
  };

  const enterYourRole = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>Role</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Select your role</option>
            <option value="Chancellor/President">Chancellor/President</option>
            <option value="Provost/Vice-Chancellor">
              Provost/Vice-Chancellor
            </option>
            <option value="Faculty">Faculty</option>
            <option value="Department Chair/Head">Department Chair/Head</option>
            <option value="Academic Advisors">Academic Advisors</option>
            <option value="Registrar">Registrar</option>
            <option value="Admissions Officer">Admissions Officer</option>
            <option value="Financial Aid Officer">Financial Aid Officer</option>
            <option value="Librarian">Librarian</option>
            <option value="Student Affairs/Services Staff">
              Student Affairs/Services Staff
            </option>
            <option value="Researcher">Researcher</option>
            <option value="Administrative Staff">Administrative Staff</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>University / College</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="transparent"
          className="w-100 mt-3"
          style={{
            color: "black",
            backgroundColor: "#adadac",
          }}
          onClick={(e) => {
            e.preventDefault();
            setRole("Student");
            setUniversity("");
            setNum(num + 2);
          }}
        >
          I am Student
        </Button>

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
            className=" mt-3"
            style={{
              width: "30%",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (university === "" || role === "") {
                toast.error("Please fill all the fields!");
                return;
              }

              setNum(num + 1);
            }}
          >
            Next
          </Button>
        </div>

        <ToastContainer />
      </Form>
    );
  };

  const handleStartDateChange = (date) => {
    setStartYear(date);
  };

  const handleEndDateChange = (date) => {
    setEndYear(date);
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
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
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
              onClick={onClickSubmit}
            >
              Register
            </Button>
          </div>

          <ToastContainer />
        </Form>
      </div>
    );
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
                onSelect={(e) => setStartMonth(e.target.value)}
                value={startMonth}
              >
                <option>Select month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
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
                onSelect={(e) => setEndMonth(e.target.value)}
                value={endMonth}
              >
                <option>Select month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
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
              onClick={onClickSubmit}
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
                  {num === 0 && enterCredentials()}
                  {num === 1 && enterYourDetails()}
                  {num === 2 && enterYourLocation()}
                  {num === 3 && enterYourRole()}
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
