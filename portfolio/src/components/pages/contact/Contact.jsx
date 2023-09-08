import React from 'react'
import contact from '../../../assets/img/contact.gif';
import Title from '../../title/Title'
import ContactForm from './ContactForm';

//Contact Layout Component
const Contact = () => {

    return (
        <div className="contact-container" id="contact-container">
            <div className="contact-container-flex">

                <div className="svg-container" data-aos='zoom-in'>
                    <img src={contact} alt={'gif'} />
                </div>
                <div className="form-container">
                    <Title title={'Get In Touch'} />
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}

export default Contact
