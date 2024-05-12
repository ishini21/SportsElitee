import React from 'react';
import './nav.css';
import {Link} from "react-router-dom";


function Nav() {
  return (
    
    <div class = "navbar">

    
      <ul className="home-ul">
        <li className="home-ll">
            <Link to="/mainhome" className="active home-a">
            Home
            </Link>
        </li>
        
        <li className="home-ll">
        <Link to="/transactiondetails" className="active home-a">
        Transaction Details
            </Link>
            
        </li>

        <li className="home-ll">
        <Link to="/addexpense" className="active home-a">
        AddExpense
            </Link>
           
        </li>

        <li className="home-ll">
        <Link to="/expensesdetails" className="active home-a">
        Expenses
            </Link>
            
        </li>

        <li className="signup-btn home-ll">
          <Link to="/signup" className="active home-a">
            Sign Up
          </Link>
        </li>

      </ul>
     
    </div>
  )
}

export default Nav
