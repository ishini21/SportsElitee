import React from 'react'
import "./S_Interface.css"
import Table from 'react-bootstrap/Table';

function S_Interface(props) {

    const {venue,day,date,time,cname} = props.schedule;
  return (
    <div>
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
        </tr>
        
      </tbody>
    </Table>
      
    </div>
  )
}

export default S_Interface
