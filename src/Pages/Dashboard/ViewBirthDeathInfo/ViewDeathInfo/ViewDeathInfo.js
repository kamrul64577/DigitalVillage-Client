import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { Link } from 'react-router-dom';

const ViewDeathInfo = () => {
    const [death, setDeath] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/death`)
            .then(res => res.json())
            .then(data => setDeath(data))
    }, []);

    const handleDeleteDeath = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/death/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            progress: undefined,
                        });
                        const remainingdeath = death.filter(death => death._id !== id);
                        setDeath(remainingdeath);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">Death Regestration Information </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Name of Information Provider </th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Mother Name</th>
                            <th>what Is the realition with You?</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Death Date</th>

                            <th>Action </th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            death.map(ev =>
                                <tr>
                                    <td>{ev.deathInfo.name}</td>
                                    <td>{ev.deathInfo.deathName}</td>
                                    <td>{ev.deathInfo.fatherName}</td>
                                    <td>{ev.deathInfo.motherName}</td>
                                    <td>{ev.deathInfo.relation}</td>
                                    <td>{ev.deathInfo.gender}</td>
                                    <td>{ev.deathInfo.address}</td>
                                    <td>{ev.value.slice(0, 10)}</td>

                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteDeath(ev._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                    <ToastContainer
                        position="top-right"
                    />
                </div>
            </div>
        </div>
    )
};

export default ViewDeathInfo;

