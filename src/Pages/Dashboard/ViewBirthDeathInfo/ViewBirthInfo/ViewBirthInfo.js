import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewBirthInfo = () => {
    const [birth, setBirth] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/birth`)
            .then(res => res.json())
            .then(data => setBirth(data))
    }, []);
console.log(birth);
    const handleDeleteBirth = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/birth/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingbirth = birth.filter(birth => birth._id !== id);
                        setBirth(remainingbirth);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">Birth Registration Information</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Mother Name</th>
                            <th>Gender</th>   
                            <th>Address</th>
                            <th>Country</th>
                            <th>Division</th>   
                            <th>District</th>
                            <th>Village</th>
                            <th>Birth Date</th>

                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            birth.map(ev=>
                                <tr>
                                    <td>{ev.birthInfo.name}</td>
                                    <td>{ev.birthInfo.fatherName}</td>
                                    <td>{ev.birthInfo.motherName}</td>
                                    <td>{ev.birthInfo.gender}</td>
                                    <td>{ev.birthInfo.address}</td>
                                    <td>{ev.birthInfo.country}</td>
                                    <td>{ev.birthInfo.division}</td>
                                    <td>{ev.birthInfo.distric}</td>
                                    <td>{ev.birthInfo.village}</td>
                                    <td>{ev.value.slice(0,10)}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteBirth(ev._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button>
                                    </td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ViewBirthInfo;

