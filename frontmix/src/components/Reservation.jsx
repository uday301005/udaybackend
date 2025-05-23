import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
      
    const handleReservation = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const { data } = await axios.post('https://masterchef-r24v.onrender.com/api/v1/reservation/send',
              
            {firstName, lastName, email, date, time, phone},
            {
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true,
            }
        );
        toast.success(data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setDate("");
          setTime("");
          setPhone("");
          navigate("/success");
    
    } catch (error) {
            console.error("Error response data:", error.response?.data);
            toast.error(error.response?.data?.message || "Reservation failed");
        } finally {
            setIsLoading(false);
        }
    }   
  return (
    <section className="reservation" id="reservation">
            <div className="container">
              <div className="banner">
                <img src="./reservation.png" alt="reservation" />
              </div>
              <div className="banner">
                <div className="reservation_form_box">
                  <h1>MAKE A RESERVATION</h1>
                  <p>For Further Questions Call Us</p>
                  <form onSubmit={handleReservation}>
                    <div>
                      <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                      <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                      </div>
                      <div>
                      <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      <input type="email" placeholder='Email' className='email_tag' value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                       <div>
                      <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} required />
                      <input type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} required />
                      </div>
                      <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Reserve Now'}{" "}
                        {!isLoading && <span><HiOutlineArrowNarrowRight /></span>}
                      </button>
                    
                    {/* Social Media Icons */}
                    <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF style={{ fontSize: '24px', cursor: 'pointer', color: '#1877F2' }} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ fontSize: '24px', cursor: 'pointer', color: '#E4405F' }} />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Reservation;
