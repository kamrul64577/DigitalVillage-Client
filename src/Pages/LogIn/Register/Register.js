import React, { useState } from 'react';
import { Alert, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
// import login from '../../../images/login.png'
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import { Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebas';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useFirebase();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert("Didn't matched the password")
            return;

        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="login">
                <div className="w-25 pb-5 pt-3  mx-auto ">
                    <Card className="">
                        <div className="card-bg">
                            
                            {
                                user?.email && <Alert severity="success">Congratulation you are added succesfully!</Alert>

                            }
                            {
                                authError && <Alert variant="outlined" severity="error">
                                    {authError}
                                </Alert>
                            }
                            <h2 className="text-center mb-4">Signup </h2>
                            <Form onSubmit={handleRegister}>
                                <Form.Group id="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" onChange={handleOnChange} required />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" onChange={handleOnChange} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={handleOnChange} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="password2" onChange={handleOnChange} required />
                                </Form.Group>
                                <Button className="w-100 text-center pb-0 my-3 bg-success text-light" type="submit">
                                    <h5>Submit</h5>
                                </Button>
                            </Form>
                        </div>
                        
                    </Card>
                    <div className="w-100 text-center signup-bg mt-1">
                        Already have account? <Link className="signup-link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
                            
            <Footer></Footer>
        </ >
    );
};

export default Register;