import React from 'react'
import './ContactUs.css'

import emailjs from "emailjs-com";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7w264rp', 'template_lj2ahsl', e.target, 'user_Tzk63u3RJr4YWhbY5Ji5u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const onButtonClickHandler = () => {
        window.alert('Thank You For Contact With Us')
    };
    return (
        <>
            <Navigation></Navigation>
            <section className="contact">
                <div className="content">
                    <h2>Contact Us </h2>
                    <p>Welcome To Our Contact Page</p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">Address</h3>
                                <p className="line-hieght">Mirpur-14<br />Dhaka<br />1206</p>
                                <p className="line-hieght">Uttra ,Sector-10<br />Dhaka<br />1206</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">Mobile Number</h3>
                                <p className="line-hieght">01780557601</p>
                                <p className="line-hieght">01709032647</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-envelope-o"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">Email</h3>
                                <p className="line-hieght">Kamrulneubcse@gmail.com</p>
                                <p className="line-hieght">vrafiun@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form onSubmit={sendEmail} >
                            <h2>Sent Massage </h2>
                            <div className="inputBox">
                                <input type="text" name="name" required="required" />
                                <span>Your Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" required="required" />
                                <span>Your Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="subject" required="required" />
                                <span>Subject</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" name="message"></textarea>
                                <span>Type Your Massage...</span>
                            </div>
                            <div className="inputBox">
                                <input onClick={onButtonClickHandler} type="submit" name="" value="Sent" />
                            </div>
                        </form>
                    </div>

                </div>

            </section>
            <Footer></Footer>
        </>
    )
}