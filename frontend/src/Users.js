import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
  
   
   
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);


    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="background1">
            <div>  
            <button className='btnm btnm3' onClick={() => navigate('/search')}>Search</button>
                <table className='App1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Game Name</th>
                            <th>Number of Seats</th>
                            <th>Date</th>
                            <th>Card Number</th>
                            <th>CVV</th>
                            <th>Expired Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gameName}</td>
                                <td>{user.seat}</td>
                                <td>{user.date}</td>
                                <td>{user.cardNumber}</td>
                                <td>{user.cvv}</td>
                                <td>{user.expiredDate}</td>
                                <td>
                                    <button className='btnm btnm1'   onClick={() => navigate(`/update/${user._id}`)} >update</button>
                                    <br>
                                
                                    </br>
                                    
                                
                                    <button className='btnm btnm2'onClick={() => handleDelete(user._id)}>Delete</button>
                                     
                                

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;