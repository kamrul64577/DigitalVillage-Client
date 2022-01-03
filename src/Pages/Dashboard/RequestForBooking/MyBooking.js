import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/booking`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking]);

    
    

    return (
        <div>
            <h1 className="text-center pb-2">My Bookings </h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Hall Name </th>
                            <th>Booking Date</th>
                            <th>Name </th>
                            <th>Mobile number</th>
                            <th>Email </th>
                            <th>Status</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            booking.filter(myBooking => myBooking.email === user.email).map(bk =>
                                <tr>
                                    <td>{bk.hallName}</td>
                                    <td>{bk.date}</td>
                                    <td>{bk.name}</td>
                                    <td>{bk.mobile}</td>
                                    <td>{bk.email}</td>
                                    <td>{bk.status}</td>
                                </tr>

                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;