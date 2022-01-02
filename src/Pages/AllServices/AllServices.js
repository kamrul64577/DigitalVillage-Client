import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
// import { Axios } from 'axios';

const AllServices = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch("https://shielded-falls-80975.herokuapp.com/services")
            .then(res => {
                setServiceList(res.data)
            })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <div className="service">
                <h2 className='text-center'>Services {serviceList?.length}</h2>
                <div className="container ">
                    <div className="row">
                        {/* <h3 className="text-center py-3"> <Link to="/applyService" className="request">নতুন সার্ভিসের জন্য আবেদন করুন  </Link></h3> */}
                        <h3 className="text-center py-3"> <Link to="/applyService" className="request">Request for new service</Link></h3>
                        <div className="col-lg-12">
                            {
                                serviceList?.map((service) =>
                                    <div className="my-5" key={service.key}>
                                        <Card className="mx-4 bg-light" >
                                            <Card.Header>{service.categories}</Card.Header>
                                            <Card.Body className="p-5">
                                                <Card.Title className="fs-2">{service.name}</Card.Title>
                                                <Card.Text><p className="mt-3 bg-dark text-white w-25 p-2">Why is this service necessary?</p>
                                                    {service.description}
                                                </Card.Text>
                                                {/* <Card.Text><p className="mt-3 bg-dark text-white w-25 p-2">এই সার্ভিসেস কেন প্রয়োজন?</p>
                                                    {val.description}
                                                </Card.Text> */}
                                                <Button variant="success">Request for this service</Button>
                                                {/* <Button variant="success">এই সেবাটির জন্য আবেদন করুন</Button> */}
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