import React, { useState } from 'react';
//import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import axios from "axios";
import Header from"../Header/Header";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./addExpenses.css"
import swal from 'sweetalert';


//<textarea name="notes" onChange={handleChange} value={inputs.notes} className="form-textarea"></textarea>


function AddExpense() {
  const history = useNavigate();
    const [inputs,setInputs] = useState({
      
          date:"",
          description:"",
          amountSpent:"",
          category:"",
          paymentMethod:"",
          notes:""
    });
    const handleChange =(e) =>{
      
            setInputs((prevState)=> ({
           ...prevState,
            [e.target.name]:e.target.value,
            
        }));

          

    };

    
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs);
        await sendRequest();
        history("/expensesdetails");
        //sendRequest().then(()=>history('userdetails'))
    }
    const sendRequest = async() =>{

      const selectedDate = new Date(inputs.date);
        const utcDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
        try {
          await axios.post("http://localhost:5000/expenses", {
            date: utcDate,
            description: String(inputs.description),
            amountSpent: Number(inputs.amountSpent),
            category: String(inputs.category),
            paymentMethod: String(inputs.paymentMethod),
            notes: String(inputs.notes),
          }).then(res => res.data);
          swal({
            title: "Expense added successfully!",
            text: "Your expense has been added successfully.",
            icon: "success",
            button: "OK",
          }).then(() => {
            history("/expensesdetails");
          });
        } catch (error) {
          console.log(error);
          swal({
            title: "Expense addition failed!",
            text: "There was an error adding your expense. Please try again later.",
            icon: "error",
            button: "OK",
          });
        }

    
    
}
  return (
    
    <div class="add">
        
      <Header></Header><br/><br/>
      <Container>
      <Form onSubmit={handleSubmit} className="addExpense">
      <center><h3 className="heading">Add Expenses</h3></center>

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

      <Button type="submit" variant="primary" >Submit</Button>
    </Form>

    </Container>

   
    </div>
  )
}
export default AddExpense