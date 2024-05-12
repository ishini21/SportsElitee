import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from"../Header/Header";
import "./update.css";
import swal from 'sweetalert';



function UpdateExpense() {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5000/expenses/${id}`)
            .then((res)=>res.data)
            .then((data)=> setInputs(data.expense));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async ()=>{
      const selectedDate = new Date(inputs.date);
        const utcDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
        try{
        await axios
        .put(`http://localhost:5000/expenses/${id}`,{
            date:utcDate,
            //Date(inputs.date),
            
            description:String(inputs.description),
            amountSpent:Number(inputs.amountSpent),
            category:String(inputs.category),
            paymentMethod:String(inputs.paymentMethod),
            notes:String(inputs.notes),
        })
        .then((res)=> res.data);
        swal({
          title: "Expense updated successfully!",
          text: "Your expense has been updated successfully.",
          icon: "success",
          button: "OK",
      }).then(() => {
          history("/expensesdetails");
      });
  } catch (error) {
      console.log(error);
      // Handle error if expense update fails
      swal({
          title: "Expense update failed!",
          text: "There was an error updating your expense. Please try again later.",
          icon: "error",
          button: "OK",
      });
  }
    };



    const handleChange =(e) =>{
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>
        history("/expensesdetails"));
      
    }

  return (
    <div>
        <Header></Header><br/><br/>
        <Container>
        <Form onSubmit={handleSubmit} class = "updateExpense">
        <center><h3 className="heading">Update Expenses</h3></center>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              value={inputs.date}
              className="form-input"
              required
            />
          </Form.Group><br/>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={handleChange}
              value={inputs.description}
              className="form-input"
              required
            />
          </Form.Group><br/>

          <Form.Group controlId="formAmountSpent">
            <Form.Label>Amount Spent</Form.Label>
            <Form.Control
              type="number"
              name="amountSpent"
              min="0"
              step="0.01"
              placeholder="0.00$"
              onChange={handleChange}
              value={inputs.amountSpent}
              className="form-input"
              required
            />
          </Form.Group><br/>

          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              onChange={handleChange}
              value={inputs.category}
              className="form-select"
              required
            >
              <option value="">Select category</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Taxes">Taxes</option>
              <option value="Loan Payments">Loan Payments</option>
              <option value="Stationery">Stationery</option>
              <option value="Other">Other</option>
              {/* Add more options as needed */}
            </Form.Select>
          </Form.Group><br/>

          <Form.Group controlId="formPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select
              name="paymentMethod"
              onChange={handleChange}
              value={inputs.paymentMethod}
              className="form-select"
              required
            >
              <option value="">Select payment method</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              {/* Add more options as needed */}
            </Form.Select>
          </Form.Group><br/>

          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="notes"
              rows={3}
              onChange={handleChange}
              value={inputs.notes}
            />
          </Form.Group><br/>

          <Button type="submit" variant="primary" >Update</Button>
          </Form>

          </Container>

    
    </div>
  )
}

export default UpdateExpense



