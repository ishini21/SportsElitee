import React, { useState } from 'react';
import axios from 'axios';

import jsPDF from 'jspdf';
import 'jspdf-autotable'; 

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        handleSearch();
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/search?query=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error searching for users:', error);
        }
    };

    
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['Name', 'Email', 'Game Name', 'Number of Seats', 'Date']],
            body: results.map(user => [user.name, user.email, user.gameName, user.seat, user.date]),
        });
        doc.save('search_results.pdf');
    };

    return (
        <div className="background1">
           <div className='search-wrapper'>
           <input
                type="text"
                placeholder="Search..."
                className='ser1'
                value={query}
                onChange={handleInputChange}
            />
           </div>

            <div>
             <div  className='hh'> <h1>Search Results</h1></div>  
                <button className="btnm3" onClick={exportToPDF}>Export to PDF</button>

    <table className='App1'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Game Name</th>
            <th>Number of Seats</th>
            <th>Date</th>
            {/* Add other table headers as needed */}
        </tr>
    </thead>
    <tbody>
        {results.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gameName}</td>
                <td>{user.seat}</td>
                <td>{user.date}</td>
                {/* Add other table cells as needed */}
            </tr>
        ))}
    </tbody>
</table>
            </div>
        </div>
    );
}

export default Search;