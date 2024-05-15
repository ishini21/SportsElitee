import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gameName, setGameName] = useState('');
    const [seat, setSeat] = useState('');
    const [date, setDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiredDate, setExpiredDate] = useState('');
    const [emailError, setEmailError] = useState('');
    const [dateError, setDateError] = useState('');
    const [expiredDateError, setExpiredDateError] = useState('');

    const navigate = useNavigate();

    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString();
        let day = currentDate.getDate().toString();
    
        // Add leading zero if month/day is a single digit
        month = month.length === 1 ? '0' + month : month;
        day = day.length === 1 ? '0' + day : day;
    
        return `${year}-${month}-${day}`;
      };

    const isValidDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString) && !isNaN(Date.parse(dateString));
    };

    const isValidExpirationDate = (year, month) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed

        return year > currentYear || (year === currentYear && month >= currentMonth);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

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

        // Expiration date validation
        const [selectedYear, selectedMonth] = expiredDate.split('-').map(Number);
        if (!isValidExpirationDate(selectedYear, selectedMonth)) {
            setExpiredDateError('Please select a future expiration date');
            return;
        }

        axios.post("http://localhost:3001/createUser", { 
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
        <div className="background1">
            <div className='background'>
                <form onSubmit={handleSubmit}>
                    <h1>Make a booking</h1>
                    
                    <div className='mb-2'>
                        <label htmlFor="nameInput">Name</label>
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
                        <input 
                            type="email" 
                            id="emailInput" 
                            placeholder='Enter Email' 
                            className={`form-control-new ${emailError ? 'is-invalid' : ''}`}
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }} 
                        />
                        {emailError && <div className="text-danger">{emailError}</div>}
                    </div>


                    <div className='mb-2'>
                        <label htmlFor="gameNameInput">Game Name</label>
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
                        <input 
                            type="date" 
                            id="dateInput" 
                            className={`form-control-new`}
                            value={date} 
                            min= {getCurrentDate()}
                            onChange={(e) => {
                                setDate(e.target.value);
                        
                            }} 
                        />
                        {dateError && <div className="text-danger">{dateError}</div>}
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="cardNumberInput">Card Number</label>
                        <input 
                            type="text" 
                            id="cardNumberInput" 
                            placeholder='Enter Card Number' 
                            className='form-control-new'
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(e.target.value)} 
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="cvvInput">CVV</label>
                        <input 
                            type="number" 
                            id="cvvInput" 
                            placeholder='Enter CVV' 
                            className='form-control-new'
                            value={cvv} 
                            onChange={(e) => setCvv(e.target.value)} 
                        />
                    </div>

             
                    <div className='mb-2'>
                        <label htmlFor="expiredDateInput">Expired Date (MM/YYYY)</label>
                        <input 
                            type="month" 
                            id="expiredDateInput" 
                            className={`form-control-new ${expiredDateError ? 'is-invalid' : ''}`}
                            value={expiredDate} 
                            onChange={(e) => {
                                setExpiredDate(e.target.value);
                                setExpiredDateError('');
                            }} 
                            min={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`}
                        />
                        {expiredDateError && <div className="text-danger">{expiredDateError}</div>}
                    </div>
                    
                    <button className='btnw btn1' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
