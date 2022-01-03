import React, { useEffect, useState } from 'react';

const RequestServices = () => {
    const [requestServices, setRequestedService] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/requestServices`)
        .then(res => res.json())
        .then(data => setRequestedService(data))
    }, [])


    // Delete Requested
    const handleDeleteRequestService = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/requestServices/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingServices = requestServices.filter(service => service._id !== id);
                        setRequestedService(remainingServices);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-4">Requested New Service is stored Here</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">
                   
                    <table className="table">
                        <tr>
                            <th>name </th>       
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Type</th>
                            <th>Why it is Needed?</th>
                            <th>Action</th>

                        </tr>
            {
                requestServices.map(service => 
                
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.contact}</td>
                                <td style={{maxWidth:'150px'}}>{service.type}</td>
                                <td style={{maxWidth:'150px'}}>{service.whyNeed}</td>

                        <td data-label="Action"><button onClick={() => handleDeleteRequestService(service._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button></td>
                            </tr>
                        
            
                )
            }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestServices;

