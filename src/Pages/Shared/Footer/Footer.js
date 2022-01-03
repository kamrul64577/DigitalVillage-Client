import React from 'react';
import './Footer.css'
// import footerImg from '../../../Images/painting-removebg-preview.png'
const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="footer-texts footer-focused">
                    <h2>Digital Village</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore distinctio eius vitae voluptatibus quidem nisi perferendis modi minima alias iusto.</p>
                    <p> Emergency Help</p>
                    <p>Check Up</p>
                    <p> Personal Diseases</p>
                </div>


                <div className="footer-texts">
                    <h5>Quick Links</h5>
                    <p> Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>contact Us</p>
                    <p>Check Up</p>
                </div>


                <div className="footer-texts">
                    <h5>Useful Links</h5>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Request For Services</p>
                    <p>Help</p>
                    <p>Check Up</p>
                </div>

                <div className="footer-texts">
                    <h5>Work Hours</h5>
                    <p>Mon - Fri : 09:00 AM - 19:00 AM</p>
                    <p>Sat - Sun : 08:00 AM - 20:00 AM</p>
                    <h5>Need For Help? Call Us</h5>
                    <p className="footer-btn">+2020534603</p>
                </div>

            </div>
            <p className="text-center">&copy; copyright  2020 all rights reserved</p>
        </>
    );
};

export default Footer;