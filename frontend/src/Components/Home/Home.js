import React from 'react';
import Header from"../Header/Header";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";





export default function Home() {
  return (
    
    <div>
      <Header></Header>
      
    
    
    <div>
    
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.ffa0188302dc542933c217daed25767f?rik=EY7AuaSSLu3npA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fq5eEVaQ.jpg&ehk=Jxj%2bWv0qZog8NX4CcptEwg7nDsdWpg7BnfN0f7dXsF4%3d&risl=&pid=ImgRaw&r=0"
            alt="First slide"
            style={{ maxHeight: '1080px' }}
            
          />
          <Carousel.Caption>
            <h1>Welcome Back to SportsElite</h1>
            <p>Explore your financial insights and tools.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.5324172c2180b7b13ca18558c1c6289b?rik=nhH25J7cbJSn9Q&pid=ImgRaw&r=0"
            alt="Second slide"
            style={{ maxHeight: '1080px' }}
            
          />
          <Carousel.Caption>
            <h1>Managing Sports Finances</h1>
            <p>Discover effective strategies for managing sports finances.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp6988093.jpg"
            alt="Third slide"
            style={{ maxHeight: '1080px' }}
            
          />
          <Carousel.Caption>
            <h1>Financial Report Analysis</h1>
            <p>Discover in-depth financial reports and analyze.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     

      </div><br/><br/>
      <div>
      <Container>
      <Row>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
      <Card.Body>
        <Card.Title>My Profile</Card.Title>
        <Card.Text>
        View and manage your profile information. Update your personal details, profile picture, and account settings as needed.
        </Card.Text>
        <Button variant="primary">My Profile</Button>
      </Card.Body>
    </Card>
          
        </Col>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.7kerHVnbM3eFzB8pl95hvAHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Search</Card.Title>
        <Card.Text>
        Easily find specific expenses using our powerful search tool. Filter and sort results to quickly locate the information you need.
        </Card.Text>
        <Link to="/expensesdetails">
        <Button variant="primary">Search</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.KAbawXFOeyyAbagV3QLAhwHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Add Expenses </Card.Title>
        <Card.Text>
        Record your expenses effortlessly. Input details such as date, description, amount spent, category, and payment method.
        </Card.Text>
        <Link to="/addexpense">
        <Button variant="primary">Add Expenses</Button></Link>
      </Card.Body>
    </Card>
        </Col>
      </Row><br/><br/>
      <Row>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/008/245/941/non_2x/diagram-money-glyph-icon-illustration-vector.jpg" />
      <Card.Body>
        <Card.Title>Track Spending</Card.Title>
        <Card.Text>
        Stay on top of your sports club's finances by tracking expenses in real-time.
         
          Keep your club's finances organized and transparent for better financial management.
        </Card.Text>
        <Link to="/expensesdetails">
        <Button variant="primary">Track Expenses</Button></Link>
      </Card.Body>
    </Card>
          
        </Col>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QAEa7fcbiJaZiAZJZsRJjwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Transaction History </Card.Title>
        <Card.Text>
        Review the transaction history and see a detailed list of past expenses. 
        Analyze your spending behavior and keep  club's finances organized and transparent.
        </Card.Text>
        <Link to="/transactiondetails">
        <Button variant="primary">Transaction History</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.e_JylB2sEF4Ua6CpZ5qh6wHaHa?w=980&h=980&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Reports & Analytics</Card.Title>
        <Card.Text>
        Gain valuable insights into your finances with comprehensive reports and analytics. 
        Visualize  spending data of the club to make informed decisions.
        </Card.Text>
        <Link to="/expensesdetails">
        <Button variant="primary">Reports</Button></Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
      </div><br/><br/>

   

      
    </div>
    
  )
}
