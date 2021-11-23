import React from 'react';
import { FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className=" container contact-info fw-bold" id="contact">
            <h2 className="fw-bold">Contact Us</h2>
            <br/>
            <p>I will get back to you within 24 hours<br/> so please feel free to ask anything about my services.My passion and desire to explore<br/> the capabilities of the human body continue to evolve as I learn more and more.</p>
            <h5>For more infomation</h5>
        
            <div className="contact-icon">
                <FaPhoneAlt /><span> +1 8 800 555 35 35</span>
            </div>
            <div className="contact-icon">
                <FaFacebookSquare /><span> www.fitness.club.facebook.com</span>
            </div>
        </div>
    );
};

export default Contact;