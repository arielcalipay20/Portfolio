import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import Axios from 'axios';

//Contact Form Component
const ContactForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    const sendEmail = (event) => {
        event.preventDefault();

        Axios.post('https://industrious-polar-lilac.glitch.me/send-email/', {
            firstName,
            lastName,
            email,
            phone,
            message
        }).then((response) => {
            if (response.status === 200) {
                alert('Email Sent Successfully');
                clearFields();
            } else {
                alert('Error Sending Email');
            }
        }).catch((error) => {
            console.error('Error: ', error);
        });
    };

    const handleChange = (e, changeState) => {
        const pattern = e.target.value;
        if (/^[a-zA-Z\s]+$/.test(pattern)) {
            changeState(pattern);
        }
    }

    const handleChangeNumber = (e) => {
        const pattern = e.target.value;
        if (/^\d{0,11}$/.test(pattern)) {
            setPhone(pattern);
        }
    }


    return (
        <form onSubmit={sendEmail} data-aos='zoom-in'>

            <div className="first-column">
                <input type='text' placeholder='First Name' value={firstName} onChange={(e) => handleChange(e, setFirstName)} required />
                <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => handleChange(e, setLastName)} required />
                <input type='text' placeholder='Phone Number' value={phone} onChange={handleChangeNumber} required />
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="second-column">
                <textarea rows={6} type='text' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>

            <button type='submit'>Send</button>

        </form>
    )
}

export default ContactForm
