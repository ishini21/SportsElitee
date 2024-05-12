import React, {useState ,useEffect} from 'react';
import axios from "axios";
import Payment from '../Payment/SinglePayment';
//import './payment.css';
//import Nav from "../Nav/Nav";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Header from"../Header/Header";


const URL="http://localhost:5000/payments";

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data);
}
 


export default function Payments() {

  const[payments,setPayments] = useState();
  useEffect(()=> {
    fetchHandler().then((data)=> setPayments(data.payments));
  },[]);
  return (
    <div>
      <Header></Header><br/><br/>
      <Container>
      <Table  striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Receipt Email</th>
          </tr>
        </thead>
        <tbody>
          {payments && payments.map((payment, i) => (
            <Payment key={i} payment={payment} />
          ))}
        </tbody>
      </Table>
      </Container>
      
    </div>
  )
}
