import React, { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from '../AddFeeback/AddFeedback';
import { useReactToPrint } from "react-to-print";
import { InputGroup, FormControl, Button } from 'react-bootstrap'; // Import InputGroup, FormControl, and Button components from React Bootstrap

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function FeedbackDetails() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Feedback Report",
    onAfterPrint: () => alert("Feedback report Successfully Download !")
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    const phoneNumber = "+94713430423";
    const message = `selected Feedback reports`
    const  WhatsappUrl = `http://web.Whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(WhatsappUrl,"_blank");
  }

  return (
    <>
      <Nav />
      <div>
        <h1 align="center">Feedback details</h1>
        <br/>
        <div style={{ position: 'fixed', top: '20px', right: '20px' }}>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search Feedback details"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </InputGroup>
        </div>

        {noResults ? (
          <div>
            <p>No Feedbacks Found</p>
          </div>
        ) : (
          <div ref={ComponentsRef}>
            {users && users.map((user, i) => (
              <div key={i}>
                <User user={user} />
              </div>
            ))}
          </div>
        )}
        <br />
        <br />
        <Button onClick={handlePrint}>Download Report</Button>
        <br />
        <br />
        <Button onClick={handleSendReport}>Send Whatsapp Message</Button>
      </div>
    </>
  );
}

export default FeedbackDetails;
