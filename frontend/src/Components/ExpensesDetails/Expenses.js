import React, {useState ,useEffect,useRef} from 'react';
import axios from "axios";
import Expense from '../Expense/Expense';
import { useReactToPrint } from "react-to-print";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from"../Header/Header";
import Form from 'react-bootstrap/Form';




const URL = "http://localhost:5000/expenses";


const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
  }
 function Expenses() {
    const[expenses,setExpenses] = useState();
    useEffect(()=> {
      fetchHandler().then((data)=> setExpenses(data.expenses));
    },[]);

    //report 
    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle:"Users Report",
    onafterprint:()=>alert("User Report Successfully Download! ")
  });

  //search

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data)=>{ 
      const filteredExpenses = data.expenses.filter((expense) =>
      Object.values(expense).some((field)=>
      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setExpenses(filteredExpenses);
      setNoResults(filteredExpenses.length === 0);
    });
  }

  

  return (
    
    <div>
  <Header></Header><br/><br/>
   <Container>
   
      <Form>
      
      <Form.Group controlId="searchExpense">
        <Form.Control
          type="text"
          name="search"
          placeholder="Search Expenses Details"
          className="search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      
    </Form><br/>
  
    


 

   
   <Button variant="primary" onClick={handleSearch} >
      Search
      </Button></Container>
  
    <br/><br/>
    {noResults ? (
      <div>
        <p>No Expenses Found</p>
      </div>
    ) : (

   
    
      <Container>
     
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount Spent</th>
          <th>Category</th>
          <th>Payment Method</th>
          <th>Notes</th>
          <th>Action</th>
        </tr>
      </thead>
      

      <tbody ref={ComponentsRef}>
        {expenses && expenses.map((expense, i) => (
          <Expense key={i} expense={expense} />
        ))}
         
      </tbody>
    </Table>
    </Container>
    )}
    <br/><br/>
    
    {/*
   <button class="download" onClick={handlePrint}>DOWNLOAD</button><br/><br/>*/} 
   <Container>
    <div className="d-grid gap-2">
      <Button class = "download" variant="primary" onClick={handlePrint} size="lg">
      DOWNLOAD
      </Button>
      
    </div>
    </Container>
  
  </div>
   
  )
}




export default Expenses





