import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewEvent = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/event`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/event/${id}`;
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
            <h1 className="text-center pb-2">Events</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Event Name</th>
                            <th>Event Venue </th>
                            <th>Event Date</th>
                            <th>Event Month</th>
                            <th>Application Fee</th>
                            <th>Event Details</th>

                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            event.map(ev =>
                                <tr>
                                    <td>{ev.event.eventName}</td>
                                    <td>{ev.event.eventPlace}</td>
                                    <td>{ev.event.eventDate}</td>
                                    <td>{ev.event.eventMonth}</td>
                                    <td>{ev.event.eventFee}</td>
                                    <td>{ev.event.eventDescription}</td>


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

export default ViewEvent;



