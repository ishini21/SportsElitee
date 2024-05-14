import React, {useEffect,useState} from 'react'
import "./UpdateSchedule.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function UpdateSchedule() {

    const [inputs,setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=> {

        const fetchHandler = async ()=>{
            await axios
            .get(`http://Localhost:5000/schedules/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.schedule))
        };
        fetchHandler();
    },[id]);

    const sendRequest = async ()=> {
        await axios
        .put(`http://Localhost:5000/schedules/${id}`, {
            venue: String (inputs.venue),
            day: String (inputs.day),
            date: String (inputs.date),
            time: String (inputs.time),
            cname: String (inputs.cname),
        })
          .then((res)=> res.data);
    };
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>
        history("/schedules"));
    };

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
      document.getElementById("d2").setAttribute('min',minDate)
      console.log(minDate);
    }, []);

  return (
    <div className='bg1'>
       <br/><br/><br/><br/>
      <p>Update Schedule</p>
      <div className='container2'>
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
        <Form.Control type="date" id='d2' name='date' onChange={handleChange} value={inputs.date} required />
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


export default UpdateSchedule
