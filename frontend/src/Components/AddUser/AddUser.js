import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./adduser.css";
import Swal from 'sweetalert2';

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    uname: "",
    status: "",
    session: "",
    sport: "",
    date: "",
    time: "",
    etime: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = null;

    if (name === "uname") {
      const isValid = /^[a-zA-Z0-9]*@/.test(value);
      error = isValid
        ? null
        : "Username must include '@' symbol and a mix of characters.";
    }
    if (name === "date") {
      const selectedDate = new Date(value);
      const today = new Date();
      if (selectedDate.toDateString() !== today.toDateString()) {
        error = 'Date must be today';
      }
    }
  
    setErrors((prevState) => ({ ...prevState, [name]: error }));
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateUsername = (value) => {
    const regex = /^(?=.*[@])(?=.*[a-zA-Z])[a-zA-Z@]{3,}$/;
    const isValid = regex.test(value);
    setErrors((prevState) => ({
      ...prevState,
      uname: isValid
        ? null
        : "Username must include '@' and have at least 3 characters with a mix of letters and '@'.",
    }));
  };

  // Save data after clicking the submit button
  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).some((val) => val !== null)) {
      window.alert("Username or Date invalid. Please fix the errors.");
      return;
    }

    const selectedDate = new Date(inputs.date);
  const today = new Date();
  if (selectedDate.getFullYear() !== today.getFullYear() ||
    selectedDate.getMonth() !== today.getMonth() ||
    selectedDate.getDate() !== today.getDate()) {
    window.alert("Date must be today.");
    return;
  }

    await sendRequest();
    Swal.fire("Player Attendence Added !");
    history("/userdetails");
  }

  const sendRequest = async () => {
    await axios
      .post("http://localhost:4000/users", {
        uname: String(inputs.uname),
        status: String(inputs.status),
        session: Number(inputs.session),
        sport: String(inputs.sport),
        date: Date(inputs.date),
        time: String(inputs.time),
      })
      .then((res) => res.data);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Add Player Attendance</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="uname"
              onChange={handleChange}
              value={inputs.uname}
              placeholder="Enter username"
              required
              isInvalid={!!errors.uname} // Set isInvalid based on whether there's an error
            />
            <Form.Control.Feedback type="invalid" style={{ color: "red" }}>
              {errors.uname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicStatus">
            <Form.Label>Attendance Status</Form.Label>
            <Form.Select
              name="status"
              onChange={handleChange}
              value={inputs.status}
              required
            >
              <option value="">Select Status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSession">
            <Form.Label>Session No</Form.Label>
            <Form.Select
              name="session"
              onChange={handleChange}
              value={inputs.session}
              required
            >
              <option value="">Select session</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSession">
            <Form.Label>Sport</Form.Label>
            <Form.Select
              name="sport"
              onChange={handleChange}
              value={inputs.sport}
              required
            >
              <option value="">Select sport</option>
              <option value="Cricket">Cricket</option>
              <option value="VolleyBall">Volleyball</option>
              <option value="Athletics">Athletics</option>
              <option value="NetBall">NetBall</option>
              <option value="FootBall">FootBall</option>
              <option value="Swimming">Swimming</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              value={inputs.date}
              required
              min={new Date().toISOString().slice(0, 10)}
              isInvalid={!!errors.date} // set the minimum selectable date to today's date          max={new Date().toISOString().slice(0, 10)} // set the maximum selectable date to today's date
            />
            <Form.Control.Feedback type="invalid" style={{ color: "red" }}>
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Select
              name="time"
              onChange={handleChange}
              value={inputs.time}
              required
            >
              <option value="">Select time</option>
              <option value="10.00 A.M">10.00 A.M</option>
              <option value="02.00 P.M">02.00 P.M</option>
              <option value="04.00 P.M">04.00 P.M</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddUser;
