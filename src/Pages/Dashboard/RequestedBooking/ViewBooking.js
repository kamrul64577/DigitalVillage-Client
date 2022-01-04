import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const ViewBooking = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/booking`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking]);

    const handleOption = (e, id) => {
        const updateStatus = e.target.value;
        let modifiedStatus = [];
        if (booking._id === id) {
            booking.status = e.target.value;
        }
        modifiedStatus.push(booking);
        const modifiedStatusProducts = { id, updateStatus };
        fetch('https://shielded-falls-80975.herokuapp.com/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedStatusProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Bookin Status Changed')
                };
            })
    }

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingBooking = booking.filter(book => book._id !== id);
                        setBooking(remainingBooking);
                    }
                })
        }

    }

    return (
        <div>
            <h1 className="text-center pb-2">All Booking</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Hall Name</th>
                            <th>Booking Date</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Status</th>

                            <th>Action</th>
                            <th>Approval</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            booking.map(bk =>
                                <tr>
                                    <td>{bk.hallName}</td>
                                    <td>{bk.date}</td>
                                    <td>{bk.name}</td>
                                    <td>{bk.mobile}</td>
                                    <td>{bk.email}</td>
                                    <td>{bk.status}</td>


                                    <td data-label="Action">
                                        <button onClick={() => handleDeleteBooking(bk._id)} className="btn btn-danger" style={{ backgroundColor: '#DF3D2E' }}>Delete</button>
                                    </td>
                                    <td>
                                        <Form.Select size="md" defaultValue={bk.status} onChange={(e) => handleOption(e, bk._id)} className="w-100">
                                            <option value="Pending">Pending</option>
                                            
                                            
                                            <option value="Processing">In Process</option>
                                            <option value="Approved">Approved</option>
                                        </Form.Select>
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

export default ViewBooking;
