import React, { useEffect, useState, useRef } from 'react'
import "./Interface.css"
import axios from 'axios';
import S_Interface from '../S_Interface/S_Interface';
import {useReactToPrint} from "react-to-print";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const URL ="http://Localhost:5000/schedules";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data );
  }

function Interface() {

    const [schedules, setSchedules] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setSchedules(data.schedules));
  },[])

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Schedule Report",
    onafterprint:()=>alert("Schedule Report Successfully Download !"),

  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNOResults] = useState(false);

  const handleSearch =() => {
    fetchHandler().then((data) =>{
      const filteredSchedules = data.schedules.filter((schedule) =>
      Object.values(schedule).some((field) =>
    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
  ))
  setSchedules(filteredSchedules);
  setNOResults(filteredSchedules.lenght === 0);
    });
  }

  return (
    <div className='bg1'>
         <br/><br/><br/>
      <p>Schedules</p>
      <input onChange={(e) => setSearchQuery(e.target.value)}
        type='text' name='search' placeholder='Search Schedule Details'
        ></input>

        <Button variant="info" onClick={handleSearch} className='search'>Search</Button>{' '}
        <br/><br/><br/><br/>
        <div >
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Venue</th>
          <th>Day</th>
          <th>Date</th>
          <th>Time</th>
          <th>Coach Name</th>
        </tr>
      </thead>
      
    </Table>
    </div>

        {noResults ? (

          <div>
            <p>No Schedules Found</p>

          </div>
        ): (
      <div ref={ComponentsRef}>
      {schedules && schedules.map((schedule, i) => (
           <div key={i}>
            <S_Interface schedule={schedule}/>
            </div>
          ))}

      </div>
        )}

        <br/><br/><br/><br/>
      <div className='b1'>
      <Button variant="primary" onClick={handlePrint}>Download Report</Button>{' '}
      </div>

    </div>
  )
}

export default Interface
