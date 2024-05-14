import React from 'react'
import "./Schedule.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Schedule(props) {
  const {_id,venue,day,date,time,cname} = props.schedule;

  const history = useNavigate();

  const deleteHandler = async()=>{
    await axios.delete(`http://Localhost:5000/schedules/${_id}`)
    .then(res=>res.data)
    .then(() =>history("/"))
    .then(() =>history("/schedules"));
  };


  return (
    <div className='table2'>
      <br></br>
      <Table striped bordered hover>

      <tbody>
        <tr>
          <td>#</td>
          <td>{venue}</td>
          <td>{day}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>{cname}</td>
          
          <td> <Link to ={`/schedules/${_id}`}> 
          
          <Button variant="success"   className='btnUpdate'>Update</Button>{' '}
          </Link>
          <Button variant="danger"  onClick={deleteHandler} className='btnDelete'>Delete</Button>{' '}
          </td>
          
        </tr>
       
      </tbody>
    </Table>
    </div>
  )
}

export default Schedule
