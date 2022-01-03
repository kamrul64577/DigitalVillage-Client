import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
    const { user, logOut } = useAuth()
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
                            {user.email &&
                                <div className="d-flex user my-2">
                                    <img className="bg-white" src={user?.photoURL} alt="" />
                                    <p className="my-auto ms-2 text-white">{user?.displayName}</p>
                                </div>
                            }
                        </Nav>
                        <Nav className="">
                            {user.email && <button className="logout-btn" onClick={logOut}>Log Out</button>}
                            {!user.email && <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} to="/login">LogIn</NavLink>}
                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}

                            {/* {user.email && < NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/logout">Logout</NavLink>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;