import React from 'react'

import emailjs from "emailjs-com";
import Navigation from '../Shared/Navigation/Navigation';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css'

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
    };

    const onButtonClickHandler = () => {
        toast.success('Message\'s sent successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
        });
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

                    <div className="contactForm mt-5">
                        <form onSubmit={sendEmail} >
                            <h2>Sent Message </h2>
                            <div className="inputBox">
                                <input type="text" name="user_name" required="required" />
                                <span>Your Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="reply_to" required="required" />
                                <span>Your Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" name="message"></textarea>
                                <span>Type Your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input onClick={onButtonClickHandler} type="submit" name="" value="Send" />
                            </div>
                            <ToastContainer
                                position="top-right"
                            />
                        </form>
                    </div>

                </div>

            </section>
        </>
    )
}