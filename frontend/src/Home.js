import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();


  return (
    <div className="background1">
      <header className="Apph-header">
        <h1>Sports</h1>
      </header>
      
      <div>
  <h1 style={{ color: 'white' }}>Popular Sports</h1>
</div>

     
       <div className='bgm'>
       
       <button  className='pic'onClick={() => navigate('/create')}>
             <div className='bgb'>FOOTBALL
            </div>
         </button>        
        <button  className='pic1' onClick={() => navigate('/create')}>
             <div className='bgb'>CRICKET
            </div>
         </button>
        <button  className='pic2' onClick={() => navigate('/create')}>
             <div className='bgb'>BADMINTON
            </div>
         </button> 
        <button  className='pic3' onClick={() => navigate('/create')}>
             <div className='bgb'>BASKETBALL
            </div>
         </button>
         <button  className='pic4' onClick={() => navigate('/create')}>
             <div className='bgb'>RUGBY
            </div>
         </button>
    
    
       </div>
      
    </div>
  );
}

export default Home;

