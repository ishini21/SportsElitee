import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'; // Import Table and Button components from React Bootstrap

function AddFeedback(props) {
  const { _id, UserId, Email, Date, Feedback } = props.user;
  const history = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Check if dateString is empty or null
    const dateOnly = dateString.split('T')[0]; // Extract date portion
    return dateOnly;
  };

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => history("/"))
      .then(() => history("/Feedbackdetails"));
  };

  return (
    <div className="feedback-table-container">
      <Table striped bordered hover style={{ maxWidth: '80%', margin: 'auto' }}>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{_id}</td>
          </tr>
          <tr>
            <td>UserId:</td>
            <td>{UserId}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{Email}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{formatDate(Date)}</td>
          </tr>
          <tr>
            <td>Feedback:</td>
            <td>{Feedback}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to={`/Feedbackdetails/${_id}`} className="edit-link">
                <Button variant="primary">Edit</Button>
              </Link>
              <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </td>
          </tr>
        </tbody>
        <br/>
        <br/><br/>
      </Table>
    </div>
  );
}

export default AddFeedback;
