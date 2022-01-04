import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// import { Axios } from 'axios';

const AllServices = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch("https://shielded-falls-80975.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <div className="service">
                <h3 className="text-center py-3"> <Link to="/applyService" className="request" style={{ textDecoration: 'none' }}>Request for new service</Link></h3>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            {
                                serviceList.map((service) =>

                                    <div className="card border-light mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{service.categories}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{service.name}</h5>
                                            <p className="card-text">{service.description}</p>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllServices;