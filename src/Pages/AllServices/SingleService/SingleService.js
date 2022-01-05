import React from 'react';
import './SingleService.css'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const SingleService = ({ service }) => {
    const { img, description, name, _id } = service;
    return (
        <Fade bottom>
            <div className="service-container shadow">
                <img src={img} alt="" />
                <div className="service-text">
                    <h5>{name}</h5>
                    {description}<br />

                </div>
                <Link to={`/serviceBooking/${_id}`}><button className="service-button">Book Now <i className="fas fa-angle-double-right"></i></button></Link>
            </div>
        </Fade>
    );
};

export default SingleService;