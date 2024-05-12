import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { Form, Button, Container } from 'react-bootstrap'; // Import Form, Button, and Container components from React Bootstrap


function Update() {
    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/users/${id}`)
                .then((res) => res.data)
                .then((data) => setInputs(data.user));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/users/${id}`, {
            UserId: String(inputs.UserId),
            Email: String(inputs.Email),
            Date: Date(inputs.Date),
            Feedback: String(inputs.Feedback),
        })
            .then((res) => res.data);
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() =>
            history("/FeedbackDetails"));
    };

    return (
        <>
            <Nav />
            <Container className="update-container" style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/78/42/76/240_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg")',
             backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                <div style={{ border: '2px solid blue', padding: '40px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '500px' }}>
                <h1 align="center">Update Feedback</h1>
                <br/>
                <Form onSubmit={handleSubmit} className="update-form">
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="Email" onChange={handleChange} value={inputs.Email} required />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Feedback:</Form.Label>
                        <Form.Control type="text" name="Feedback" onChange={handleChange} value={inputs.Feedback} required />
                    </Form.Group>
                    <br/>
                    <Button className="submit" type="submit">Edit</Button>
                </Form>
                </div>
            </Container>
        </>
    )
}

export default Update;
