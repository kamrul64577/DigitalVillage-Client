import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation'
import './AllServices.css'
// import { Axios } from 'axios';

const AllServices = () => {
    const [services, setServices] = useState()
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
            <h3 className="text-center py-3"> <Link to="/applyService" className="request" style={{ textDecoration: 'none' }}>Request for new service</Link></h3>
            <div className="container ">
                <div className="row">
                    {
                        services.map((service) =>
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
                </div>
            </div>
        </>
    );
};

export default AllServices;