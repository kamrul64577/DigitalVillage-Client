import React, { useEffect, useState, useRef } from 'react';
import './RegisterEvent.css'
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import { toast } from 'react-toastify';
const RegisterForEvent = () => {
    const { eventId } = useParams();
    const [events, setEvent] = useState({});
    const { user } = useAuth();
    const eventNameRef = useRef('');
    const eventFeeRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const mobileRef = useRef('');
    const trxIdRef = useRef('');

    useEffect(() => {
        fetch(`https://shielded-falls-80975.herokuapp.com/event/${eventId}`)
            .then(res => res.json())
            .then(data => setEvent(data.event))
    }, []);
    console.log(events);
    const handleRegister = e => {
        const eventName = eventNameRef.current.value;
        const eventFee = eventFeeRef.current.value;
        const name = userNameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;
        const trxId = trxIdRef.current.value;

        const newRegister = {eventName: eventName, trxId: trxId, eventFee: eventFee, name: name, email: email, address: address, mobile: mobile }

        fetch(`https://shielded-falls-80975.herokuapp.com/registerEvent`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success('Registration processed successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                    // reset();
                }
            })



        e.preventDefault();
    };


    return (
        <div>
            <Navigation></Navigation>
            <div className="place-order py-5 container">
                <div className="border p-3">
                    <h1>Information About Event </h1>
                    {/* <img className="img-fluid" src={event.img} alt="" /> */}
                    <h3>Event : {events.eventName}</h3>
                    <p className="">Description Of Event : {events.eventDescription}</p>
                    <h5 className="my-3 p-3 bg-light">Apply Fee:{events.eventFee}Money</h5>
                    <h6>Place: {events.eventPlace}</h6>
                    {/* <h5>eventFee: ${event.eventFee}</h5> */}
                </div>
                <div className="border p-3 place-order-form">
                    <h2>A</h2>
                    <form onSubmit={handleRegister} className="text-center mt-4">
                        {/* <input type="text" className="form-control" defaultValue={event._id || ''} ref={idRef} /> */}
                        <input type="text" className="form-control" defaultValue={events.eventName || ''} ref={eventNameRef} readOnly />
                        <input type="text" className="form-control" defaultValue={events.eventFee  || ''} ref={eventFeeRef} readOnly />
                        <input type="text" className="form-control" defaultValue={user.displayName || ''} ref={userNameRef} />
                        <input type="text" className="form-control" placeholder="Transaction Id" ref={trxIdRef} />
                        <input type="email" className="form-control" defaultValue={user.email || ''} ref={emailRef} />
                        <input type="text" className="form-control" placeholder="Address " ref={addressRef} />
                        <input type="number" className="form-control" placeholder="Mobile " ref={mobileRef} />
                        <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" value="Apply for Event " />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RegisterForEvent;