import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import './AllServices.css'
import SingleService from './SingleService/SingleService';
// import { Axios } from 'axios';

const AllServices = () => {
    const [services, setServices] =useState()
    useEffect(()=>{
        fetch('https://shielded-falls-80975.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{ 
             console.log(data)
            setServices(data)})
    },[])
    return (
        <>
        <Navigation></Navigation>
          <div className="services-main">
  
                <div className="services-content-main">
                    <div className="services-content-text-main">
                      <div className="services-content-text">
                      <p >Our Services</p>
                        <h1>We Provide The Best Service For You</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusm tempor incididunt ut labore et dolore magna aliqua</p>
                      </div>
                    </div>
                </div>
                <div className="services-container">
                    
                { 
                services?.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
                </div>
          </div>
          </>
    );
};

export default AllServices;