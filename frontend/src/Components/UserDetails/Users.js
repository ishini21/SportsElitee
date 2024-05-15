import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
import "./users.css";
import { Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import CustomCard from "./Card";

const URL = "http://localhost:4000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState([]);
  const [sports, setSports] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredSports, setFilteredSports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [sportsCount, setSportsCount] = useState(0); // State for sports count
  const [usersCount, setUsersCount] = useState(0); // State for users count

  useEffect(() => {
    fetchHandler().then((data) => {
      setUsers(data.users);
      setSports(data.sports);
      setFilteredUsers(data.users);
      setFilteredSports(data.sports);
      setUsersCount(data.users.length); // Set users count

      // Check if data.sports exists before accessing its length property
      if (data.sports) {
        setSportsCount(data.sports.length); // Set sports count
      } else {
        setSportsCount(5); // Set sports count to 0 if data.sports is undefined or null
      }
    });
  }, []);

  const ComponentsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Users Attendance Records",
    onAfterPrint: () => {
      Swal.fire(
        "Success",
        "Users Attendance Report Successfully Downloaded !!",
        "success"
      );
    },
  });

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredUsers = users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(query)
      )
    );
    setFilteredUsers(filteredUsers);
    setNoResults(filteredUsers.length === 0);
  };

  const handleSendReport = () => {
    // Create the WhatsApp chat URL
    const phoneNumber = "+710442832";
    const message = "selected User Reports";
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp after confirming with SweetAlert
    Swal.fire({
      title: "Send Report",
      text: "Are you sure you want to send the report via WhatsApp?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(WhatsAppUrl, "_blank");
      }
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontFamily: "Roboto, sans-serif" }}>
        <h1>Players Attendance Records</h1>
      </div>
      <Row className="mb-3">
        <Col>
          <CustomCard title="Total Users" count={usersCount} />
        </Col>
        <Col>
          <CustomCard title="Total Sports" count={sportsCount} />
        </Col>
      </Row>
      <div className="search-container">
        <input
          className="search-input"
          onChange={handleSearch}
          type="text"
          name="search"
          placeholder="Search Players Details"
        />

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {noResults ? (
        <div>
          <p>No Players Found</p>
        </div>
      ) : (
        <div ref={ComponentsRef}>
          {filteredUsers &&
            filteredUsers.map((user, i) => (
              <div key={i}>
                <User user={user} />
              </div>
            ))}
        </div>
      )}
      <div className="button-container">
        <Button onClick={handlePrint} variant="outline-success">
          Download Report
        </Button>
        <Button onClick={handleSendReport} variant="outline-success">
          Send Report via Whatapp
        </Button>
      </div>
    </div>
  );
}

export default Users;
