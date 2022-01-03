import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ApplicationOfEvent = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/registerEvent`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/registerEvent/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingEvent = event.filter(event => event._id !== id);
                        setEvent(remainingEvent);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">Applied Events</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Event Name</th>
                            <th>Application Fee</th>
                            <th>Transaction ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>




                            <th>Action </th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            event.map(ev =>
                                <tr>
                                    <td>{ev.eventName}</td>
                                    <td>{ev.eventFee}</td>
                                    <td>{ev.trxId}</td>
                                    <td>{ev.name}</td>
                                    <td>{ev.email}</td>
                                    <td>{ev.mobile}</td>
                                    <td>{ev.address}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteEvent(ev._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button>
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

export default ApplicationOfEvent;