import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';
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
            <h3 className="text-center py-3"> <Link to="/applyService" className="request" style={{ textDecoration: 'none' }}>Request for new service</Link></h3>
            <div className="container ">
                <div className="row">
                    {
                        serviceList.map((service) =>
                            <div className="col-lg-6 col-12">
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