import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation'
import './AllServices.css'
import Fade from 'react-reveal/Fade';
import SingleService from './SingleService/SingleService';
// import { Axios } from 'axios';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://shielded-falls-80975.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <div className="services-main">

                <div className="services-content-main">
                    <div className="services-content-text-main">
                        <div className="services-content-text">
                            <p >Our Services</p>
                            <h1>We Provide The Best Service For You</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusm tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                <div className="services-container">

                    {
                        services?.map(service => 
                        <Fade bottom key={service._id}>
                            <div className="service-container shadow">
                                <img src={service.img} alt="" />
                                <div className="service-text">
                                    <h5>{service.name}</h5>
                                    {service.description}<br />

                                </div>
                                <Link to={`/serviceBooking/${service._id}`}><button className="service-button">Book Now <i className="fas fa-angle-double-right"></i></button></Link>
                            </div>
                        </Fade>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllServices;