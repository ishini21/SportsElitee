import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './user.css';
import Swal from 'sweetalert2';



function User(props) {
  const { _id, uname, status, session,sport, date, time} = props.user;

  const history = useNavigate();

  const deleteHandler = async () => {
    const userConfirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete user records?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (userConfirmed.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/users/${_id}`);
        Swal.fire('Deleted!', 'User Records deleted successfully !', 'success');
        history("/userdetails");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting user records:", error);
        Swal.fire('Error', 'Failed to delete user records', 'error');
      }
    }
};

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{_id}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{uname}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>Session:</td>
            <td>{session}</td>
          </tr>
          <tr>
            <td>Sport:</td>
            <td>{sport}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{formatDate(date)}</td>
          </tr>
          <tr>
            <td>Start Time:</td>
            <td>{time}</td>
          </tr>

        
          <tr>
            <td colSpan="2">
              <Link to={`/userdetails/${_id}`} className="btn btn-primary me-2">Update</Link>
              <button onClick={deleteHandler} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default User;