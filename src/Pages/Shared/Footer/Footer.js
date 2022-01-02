import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <h4>Digital Village </h4>
                            <p>Support </p>
                            <p>Privacy Policy</p>
                        </Col>
                        <Col lg={3}>
                            <h3>Services</h3>
                            <p>Get help from officer</p>
                            <p>Process</p>
                            <p>Essay</p>
                        </Col>
                        <Col lg={3}>
                            <h3>Support</h3>
                            <p>Real time chat with officer </p>
                            <p>Emergency Contact</p>
                            {/* <p>Cookies Policy</p> */}
                        </Col>
                        <Col lg={3}>

                            <h3>Our Address</h3>
                            <p>Bashundhara R/A</p>
                            <p>Dhaka, 1200</p>
                            <ul className="list-unstyled d-flex">
                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-facebook-messenger"></i></Link></li>
                            </ul>
                        </Col>
                        <p className="text-center pt-4">Digital Village  &copy;  All Rights Reserved</p>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;