import React from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


function Nav() {
  return (
    <div className='c1'>
      <ListGroup>
      <Link to="/scheduleinterface" className="activeHome">
      <ListGroup.Item>Schedules</ListGroup.Item>
      </Link>
      <Link to="/schedules" className="activeHome">
      <ListGroup.Item>View Schedules</ListGroup.Item>
      </Link>
      <Link to="/addSchedules" className="activeHome">
      <ListGroup.Item>Add Schedule</ListGroup.Item>
      </Link>
      <Link to="/updateSchedules" className="activeHome">
      <ListGroup.Item>Update Schedule</ListGroup.Item>
      </Link>
  
    </ListGroup>
    </div>
  );
}

export default Nav
