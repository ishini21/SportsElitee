import React from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Import Form, Button, Container, Row, and Col components from React Bootstrap

function AddFb() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    UserId: "",
    Email: "",
    Date: "",
    Feedback: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest();
    history("/FeedbackDetails");
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      UserId: String(inputs.UserId),
      Email: String(inputs.Email),
      Date: inputs.Date,
      Feedback: String(inputs.Feedback),
    }).then(res => res.data);
  };

  return (
    <>
      <Nav />
      <div className="add-feedback-background" style={{ backgroundImage: `url("https://media.istockphoto.com/id/905105146/photo/sports-equipment-on-green-grass-top-view.jpg?s=2048x2048&w=is&k=20&c=-hjNIo2WlPiRBv7iVE7Rx2Wi_f2Lk4A14w-HXL_vEC4=")`,
       backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <div className="add-feedback-form" style={{ border: '2px solid blue', padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h1 align="center">Add Feedback</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUserId">
                    <Form.Label>UserId:</Form.Label>
                    <Form.Control type="text" name="UserId" onChange={handleChange} value={inputs.UserId} required />
                  </Form.Group>
                  <br/>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="Email" onChange={handleChange} value={inputs.Email} required />
                  </Form.Group>
                  <br/>
                  <Form.Group controlId="formDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" name="Date" onChange={handleChange} value={inputs.Date} required />
                  </Form.Group>
                  <br/>
                  <Form.Group controlId="formFeedback">
                    <Form.Label>Feedback:</Form.Label>
                    <Form.Control type="text" name="Feedback" onChange={handleChange} value={inputs.Feedback} required />
                  </Form.Group>
                  <br/>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">Submit</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AddFb;
