import React, { useEffect, useState } from 'react'
import "./AddSchedule.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function AddSchedule() {

    const history = useNavigate();
    const [inputs,setInputs] = useState({
        venue: "",
        day: "",
        date: "",
        time: "",
        cname: "",

    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(inputs);
        await sendRequest();
        history("/schedules");
    };

    const sendRequest = async()=> {
        await axios
        .post("http://Localhost:5000/schedules",{
           venue: String (inputs.venue),
           day: String (inputs.day),
           date: String (inputs.date),
           time: String (inputs.time),
           cname: String (inputs.cname),
        }).then(res => res.data);
    }

    useEffect(() => {
      var date = new Date();
      var tdate = date.getDate();
      var month = date.getMonth() + 1;
      if(tdate < 10){
        tdate = '0' + tdate;
      }
      if(month < 10){
        month = '0' + month;
      }
      var year = date.getUTCFullYear();
      var minDate = year + "-" + month + "-" + tdate;
      document.getElementById("d1").setAttribute('min',minDate)
      console.log(minDate);
    }, []);


  return (
    <div className='bg1'>
       <br/><br/><br/><br/>
      <p>Add schedules</p>

      <div className='container1'>
      <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label>Venue</Form.Label>
        <Form.Control type="text" name='venue' onChange={handleChange} value={inputs.venue} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" name='day' onChange={handleChange} value={inputs.day} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" id='d1' name='date' onChange={handleChange} value={inputs.date} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" name='time' onChange={handleChange} value={inputs.time} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Coach Name</Form.Label>
        <Form.Control type="text" name='cname' onChange={handleChange} value={inputs.cname} required />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>

  )

}

export default AddSchedule

