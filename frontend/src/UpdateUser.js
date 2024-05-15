import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gameName, setGameName] = useState('');
    const [seat, setSeat] = useState(''); 
    const [date, setDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiredDate, setExpiredDate] = useState('');
    const [dateError, setDateError] = useState('');


    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(result => {
                const userData = result.data;
                setName(userData.name);
                setEmail(userData.email);
                setGameName(userData.gameName ? userData.gameName : '');
                setSeat(userData.seat.toString()); // Convert seat to string
                setDate(new Date(userData.date).toISOString().split('T')[0]); // Format date
                setCardNumber(userData.cardNumber.toString()); // Convert cardNumber to string
                setCvv(userData.cvv);
                setExpiredDate(new Date(userData.expiredDate).toISOString().split('T')[0]); // Format expiredDate
            })
            .catch(err => console.log(err));
    }, [id]);
    



     
    const Update = (e) => {
        e.preventDefault();


        const isValidDate = (dateString) => {
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            return regex.test(dateString) && !isNaN(Date.parse(dateString));
        };
         // Date validation
      if (!isValidDate(date)) {
        setDateError('Please enter a valid date');
        return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const selectedDate = new Date(date).toISOString().split('T')[0];
    if (selectedDate < currentDate) {
        setDateError('Please select a future date');
        return;
    }
        axios.put(`http://localhost:3001/updateUser/${id}`, { 
            name, 
            email, 
            gameName, 
            seat,
            date, 
            cardNumber, 
            cvv, 
            expiredDate 
        })
        .then(result => {
            console.log(result);
            navigate('/user');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="background2">
            <div className='background'>
                <form onSubmit={Update}>
                    <h2>Update User</h2>

                    <div className='mb-2'>
                        <label htmlFor="nameInput">Name</label>
                        <br/>
                        <input 
                            type="text" 
                            id="nameInput" 
                            placeholder='Enter Name' 
                            className='form-control-new'
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="emailInput">Email</label>
                        <br/>
                        <input 
                            type="email" 
                            id="emailInput" 
                            placeholder='Enter Email' 
                            className='form-control-new'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="gameNameInput">Game Name</label>
                        <br/>
                        <input 
                            type="text" 
                            id="gameNameInput" 
                            placeholder='Enter Game Name' 
                            className='form-control-new'
                            value={gameName} 
                            onChange={(e) => setGameName(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="SeatsInput">Number of Seats</label>
                        <br/>
                        <input 
                            type="number" 
                            id="SeatsInput" 
                            placeholder='Enter Number of Seats' 
                            className='form-control-new'
                            value={seat} 
                            onChange={(e) => setSeat(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="dateInput">Date</label>
                        <br/>
                        <input 
                            type="date" 
                            id="dateInput" 
                            className={`form-control-new ${dateError ? 'is-invalid' : ''}`}
                            value={date} 
                            onChange={(e) => {
                                setDate(e.target.value)
                                setDateError('');

                            }} 
                        />
                    </div>

                    <br/>

                    <button className='btnw btn2'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
