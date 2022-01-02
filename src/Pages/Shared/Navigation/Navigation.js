import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>

                    <Navbar.Brand href="#home" ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">

                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/">Home</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/all-services">Services</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/dashboard">Dashboard </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/event">Sports Events </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/about-us">About Us</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/contact-us">Contact</NavLink>
                        </Nav>
                        <Nav className=" ">

                            {/* {user.email && <Button className="text-light  " onClick={logOut}><h6>Log Out</h6></Button>}
                            {!user.email && <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/login" >LogIn</NavLink>} */}
                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}

                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Logout</NavLink> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
};

export default Navigation;