import { Alert, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import './Login.css';

const LogIn = () => {

    const [loginData, setLoginData] = useState({});
    const { loginUser, user, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLogIn = e => {

        loginUser(loginData.email, loginData.password, location, history);
       
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>

            <div className="login">
                <div className="w-25 py-5  mx-auto ">
                    <Card className="mt-5">
                        <div className="card-bg">
                            <h2 className="text-center mb-4">Login</h2>

                            {authError && <Alert variant="danger">{authError}</Alert>}
                            <Form onSubmit={handleLogIn}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" onChange={handleOnChange} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={handleOnChange} required />
                                </Form.Group>

                                <Button className="w-100 text-center pb-0 my-3 bg-success text-light" type="submit"><h5>Submit</h5></Button>
                            </Form>
                            <div className="w-100 text-center mt-3 forgot-password-div">
                                <Link className="forgot-password" to="/forgot-password">Forget Password? </Link>
                            </div>
                        </div>
                    </Card>
                    <div className="w-100 text-center mt-3 signup-bg">
                        Create?  <Link className="signup-link" to="/register">Register</Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default LogIn;