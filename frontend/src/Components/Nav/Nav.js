import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'; // Import Navbar and Nav components from React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file

function Nav() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg"> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className="mr-auto"> 
          <BootstrapNav.Link as={Link} to="/mainhome" className="navbar-link active">Home</BootstrapNav.Link> 
          <BootstrapNav.Link as={Link} to="/AddFeedback" className="navbar-link active">Add Feedback</BootstrapNav.Link> 
          <BootstrapNav.Link as={Link} to="/Feedbackdetails" className="navbar-link active">Feedback Details</BootstrapNav.Link> 
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
