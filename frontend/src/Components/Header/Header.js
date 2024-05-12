import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <Navbar bg="primary" variant="dark">
      
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/mainhome">Home</Nav.Link>
        <Nav.Link as={Link} to="/transactiondetails">Transaction Details</Nav.Link>
        <Nav.Link as={Link} to="/addexpense">Add Expense</Nav.Link>
        <Nav.Link as={Link} to="/expensesdetails">Expenses</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>


  );


  
}

export default Header
