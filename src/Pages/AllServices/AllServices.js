import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
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
                <h2 className='text-center'>Services {serviceList?.length}</h2>
                <div className="container ">
                    <div className="row">
                        <h3 className="text-center py-3"> <Link to="/applyService" className="request">Request for new service</Link></h3>
                        <div className="col-lg-12">
                            {
                                serviceList.map((service) =>
                                    <div className="my-5" key={service._id}>
                                        <Card className="mx-4 bg-light" >
                                            <Card.Header>{service.categories}</Card.Header>
                                            <Card.Body className="p-5">
                                                <Card.Title className="fs-2">{service.name}</Card.Title>
                                                <Card.Text className="mt-3 p-2">{service.description}</Card.Text>
                                                <Button variant="primary" className="me-2">Why is this service necessary?</Button>
                                                <Button variant="success" className="ms-2">Request for this service</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllServices;