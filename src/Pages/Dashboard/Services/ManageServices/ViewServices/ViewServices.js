import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('Successfully deleted');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-4">Services</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">
                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            services.map(service =>
                                <tr>
                                    <td>{service.name}</td>
                                    <td>{service.categories}</td>
                                    <td>{service.description}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteService(service._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}> Delete</button>

                                        <button className="btn " style={{ backgroundColor: '#A3A9A4', marginTop: '5px' }} ><Link to={`/dashboard/updateService/${service._id}`} style={{ textDecoration: 'none', color: 'white' }}>Update</Link></button>
                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewServices;