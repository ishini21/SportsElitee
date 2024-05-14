import React from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



function Main() {
  return (
    <div className='bg'>
        <br/><br/><br/><br/><br/>
        <p>Schedules</p>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <div className='container'>
        <Link to="/cricketpage" className="cricket">
        <Button variant="info" className='btn'>Cricket</Button>{' '}
        <br/><br/>
        </Link>
        <Link to="/footballpage" className="football">
        <Button variant="info" className='btn'>Football</Button>{' '}
        <br/><br/>
        </Link>
        <Link to="/badmintonpage" className="badminton">
        <Button variant="info" className='btn'>Badminton</Button>{' '}
        <br/><br/>
        </Link>
        <Link to="/volleyballpage" className="volleyball">
        <Button variant="info" className='btn'>Volleyball</Button>{' '}
        <br/><br/>
        </Link>
        <Link to="/swimmingpage" className="swimming">
        <Button variant="info" className='btn'>Swimming</Button>{' '}
        <br/><br/>
        </Link>
        </div>
      
    </div>
  )
}

export default Main
