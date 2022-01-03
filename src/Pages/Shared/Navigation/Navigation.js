import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navigation.css'

import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth()
    const logoutWithAlart = () => {
        logOut()
    }
    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Container >
                    <Navbar.Brand className=" fw-bold" href="#home"> Digital Village <span className="my-color "></span></Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: "white" }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" ms-auto mt-3">
                            <Nav.Link as={Link} className="me-1" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="mx-1" to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} className="mx-1" to="/all-services">Services</Nav.Link>
                            <Nav.Link as={Link} className="mx-1" to="/event">Sports Event</Nav.Link>
                            <Nav.Link as={Link} className="ms-1" to="/contact-us">Contact Us</Nav.Link>
                            {/* { !user.email &&   <Nav.Link as={Link} className="text-white fw-bold mx-3 nav-hover" to="/login">Log In</Nav.Link>} */}

                            <Nav.Link as={Link} className="  dashboard-link " to="/dashboard">Dash Board</Nav.Link>


                            {user.email &&
                                <div className="d-flex user my-2">
                                    <img className="bg-white ms-5" src={user?.photoURL} alt="" />
                                    <p className="mt-1 ms-2">{user?.displayName}</p>

                                </div>
                            }


                            {
                                user.email ?
                                    <Link to="/signup">  <button onClick={logoutWithAlart} className="signup-button ms-5">Log Out</button></Link>
                                    :
                                    <Link to="/signup"> <button className="signup-button ">Sign Up</button></Link>
                            }

                            {/* { !admin &&  <h4 className="ms-4"><i className="fas fa-cart-plus"> {myBookingData?.length}</i></h4>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;