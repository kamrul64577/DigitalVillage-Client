import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ViewEvent = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/event`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/event/${id}`;
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
                    <ToastContainer
                        position="top-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;



