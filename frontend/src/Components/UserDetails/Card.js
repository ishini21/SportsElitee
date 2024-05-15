import React from "react";
import Card from "react-bootstrap/Card";

const CustomCard = ({ title, count }) => {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={titleStyle}>{title}</Card.Title>
        <Card.Text style={countStyle}>{count}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Inline CSS styles
const cardStyle = {
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const countStyle = {
  fontSize: "2rem",
  color: "#007bff",
};

export default CustomCard;
