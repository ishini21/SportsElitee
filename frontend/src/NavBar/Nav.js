import React from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navb">
       
<div className='elite'>ELITE SPORTS</div>  
    <div className="other">
             
              <button onClick={() => navigate('/')} className="btnn">Home</button>
              <button onClick={() => navigate('/user')} className="btnn">My Bookings</button>
              <button onClick={() => navigate('/')} className="btnn">About Us</button>
              <button onClick={() => navigate('/')} className="btnn">Contact Us</button>


              </div>
    </nav>
  );
}

export default Nav;
