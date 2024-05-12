
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';



function Expense(props) {
 const{ _id,date, description, amountSpent, category, paymentMethod, notes } = props.expense;

 const history = useNavigate();
  const deleteHandler = async()=>{

    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    });
   
    if (willDelete) {
      try {
        // Delete the expense if confirmed
        await axios.delete(`http://localhost:5000/expenses/${_id}`);
        // Display success message after deletion
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        }).then(() => {
          // Redirect to home and expenses details page
          history("/");
          history("/expensesdetails");
        });
      } catch (error) {
        console.log(error);
        // Handle error if deletion fails
        swal("Oops!", "There was an error deleting your expense. Please try again later.", "error");
      }
    } else {
      // Handle cancellation
      swal("Expense Deletion Canceled: It's Safe!");
    }
  };


  return (
    <tr>
      <td>{_id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amountSpent}</td>
      <td>{category}</td>
      <td>{paymentMethod}</td>
      <td>{notes}</td>
      <td>
        
        
      <Button variant="primary" as={Link}
      to={`/expensesdetails/${_id}`} >Update</Button>{' '}
      <Button variant="danger" onClick={deleteHandler}>Delete</Button>{' '}
      </td>
    </tr>
  
  
  )
}

export default Expense;
