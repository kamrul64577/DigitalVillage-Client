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
<<<<<<< HEAD
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
=======
            <Navigation></Navigation>
            <h3 className="text-center py-3"> <Link to="/applyService" className="request" style={{ textDecoration: 'none' }}>Request for new service</Link></h3>
            <div className="container ">
                <div className="row">
                    {
                        serviceList.map((service) =>
                            <div className="col-lg-4 col-12" key={service._id}>
                                <div className="card border mb-3 h-100" >
                                    <div className="card-header">{service.categories}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">{service.description}</p>
                                        <button variant="success" className="btn btn-success m-2">Request for this service</button>
                                    </div>
                                </div>
                            </div>)
                    }
>>>>>>> 33dfb14e8d1d21a571e1a3e978020d0b15600092
                </div>
          </div>
          </>
    );
};

export default AllServices;