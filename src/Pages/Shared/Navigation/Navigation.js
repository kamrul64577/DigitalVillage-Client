import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import useFirebase from '../../../hooks/useFirebas'
import './Navigation.css'
const Navigation = () => {
    const {user,logOut}= useFirebase()
    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Container>

                    <Navbar.Brand href="#home" ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">

                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/">Home</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/services">Services</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/dashboard">Dashboard </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/event">Sports Events </NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/about-us">About Us</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/contact-us">Contact</NavLink>
                        </Nav>
                        <Nav className=" ">

                            {user.email && <button className="logout-btn" onClick={logOut}><h6>Log Out</h6></button>}
                            {!user.email && <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} to="/login">LogIn</NavLink>}
                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}

                            {/* {user.email && < NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/logout">Logout</NavLink>} */}
            { user.email &&
           <div className="d-flex user my-2">
           <img className="bg-white ms-5" src={user?.photoURL} alt="" />
           <p className="mt-1 ms-2 text-white">{user?.displayName}</p>
           
           </div>
       } 

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Navigation;