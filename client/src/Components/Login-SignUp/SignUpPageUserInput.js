import React from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export function validateEmail(emailId, setNum, num) {
  const data = {
    email: emailId,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("http://localhost:5000/users/validateEmail", data, config)
    .then((res) => {
      if (res.status === 200 && res.data.message === "Email already exists") {
        toast.error("Email already exists");
      } else if (res.status === 200) {
        setNum(num + 1);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function enterCredentials(
  emailId,
  password,
  confirmPassword,
  setEmailId,
  setPassword,
  setConfirmPassword,
  setNum,
  num
) {
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
          validateEmail(emailId, setNum, num);
        }}
      >
        Next
      </Button>
      <ToastContainer />
    </Form>
  );
}

export function enterYourDetails(
  firstName,
  lastName,
  setFirstName,
  setLastName,
  setNum,
  num
) {
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
}

export function enterYourLocation(
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
) {
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
}

export function enterYourRole(
  role,
  university,
  setRole,
  setUniversity,
  setNum,
  num
) {
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
}
