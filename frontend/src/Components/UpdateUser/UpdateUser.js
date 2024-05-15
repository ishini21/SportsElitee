import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './updateuser.css';
import Swal from 'sweetalert2';

function UpdateUser(){

    const [inputs,setInputs]=useState({});
    const history = useNavigate();
    const id =useParams().id;

    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios
            .get(`http://localhost:4000/users/${id}`)
            .then((res)=>res.data)
            .then((data)=>setInputs(data.user));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async()=>{
        await axios.put(`http://localhost:4000/users/${id}`,{
            uname:String (inputs.uname),
            status:String (inputs.status),
            session:Number (inputs.session),
            sport:String (inputs.sport),
            date:Date (inputs.date),
            time:String (inputs.time),
            etime:String(inputs.etime),

        })
           .then((res)=>res.data); 
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
      sendRequest().then(() => {
          Swal.fire({
              title: 'Updated!',
              text: 'User details updated successfully!',
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then(() => {
              history("/userdetails");
          });
      });
  };
  


  return (
    <div className="container">
    <div className="form-container">
      <h1>Update Player Attendance</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="uname"
            onChange={handleChange}
            value={inputs.uname}
            placeholder="Enter username"
            required
          />
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

        <Form.Group className="mb-3" controlId="formBasicSport">
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
          />
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
       
  )
}

export default UpdateUser
