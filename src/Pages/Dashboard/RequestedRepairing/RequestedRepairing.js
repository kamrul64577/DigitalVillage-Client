import React, { useEffect, useState } from 'react';
import './RequestRepairing.css'
const RequestRepairing = () => {
    const [requestRepairing, setRequestedRepairing] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/requestRepairing`)
            .then(res => res.json())
            .then(data => setRequestedRepairing(data))
    }, []);


    // Delete Requested
    const handleDeleteRequestRepairing = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/requestRepairing/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingRepairing = requestRepairing.filter(repair => repair._id !== id);
                        setRequestedRepairing(remainingRepairing);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-4">Preserved here with Requested Repairs </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Name</th>        
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Type</th>
                            <th>Why it Is Needd?</th>
                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            requestRepairing.map(repair => 
                                <tr>
                                    <td>{repair.name}</td>
                                    <td>{repair.email}</td>
                                    <td>{repair.contact}</td>
                                    <td style={{ maxWidth: '150px' }}>{repair.requestFor}</td>
                                    <td style={{ maxWidth: '150px' }}>{repair.description}</td>

                                    <td data-label="Action"><button onClick={() => handleDeleteRequestRepairing(repair._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button></td>
                                </tr>
                                )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestRepairing;