import axios from 'axios';
import React, { useState } from 'react';
import eventImg from '../../../../images/E.jpg'
import { toast, ToastContainer } from 'react-toastify';

const AddEvent = () => {
    const [event, setEvent] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newEvent = { ...event }
        newEvent[field] = value;
        setEvent(newEvent);
    }

    const handleAddEvent = e => {
        axios.post('https://shielded-falls-80975.herokuapp.com/event', {
            event
        })
            .then(() => {
                toast.success('Message\'s sent successfully.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
            });
        e.preventDefault();
        e.target.reset()
    }
    return (
        <>
            <div className="container">
                <div className="row mt-4 align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <h3 className="text-center pt-lg-5 pb-3 theme-color d-block d-lg-none">Add event</h3>
                        <img height="300px" src={eventImg} alt="" className="img-fluid -w75" /><br />
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3 container-fluid">
                        <h3 className="text-center pt-5 pb-3 theme-color d-none d-lg-block">Add event</h3>
                        <div className="text-start px-0 px-lg-3">
                            <form onSubmit={handleAddEvent} className="px-4 pb-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Event Name</label>
                                            <input type="text" className="form-control" placeholder="Event Name" onChange={handleOnChange} name="eventName" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Event Venue</label>
                                            <input type="text" className="form-control" placeholder="Event Venue" onChange={handleOnChange} name="eventPlace" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Event Date</label>
                                            <input type="text" className="form-control" id="floatingInput" placeholder="Event Date" onChange={handleOnChange} name="eventDate" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Event Month</label>
                                            <input type="text" className="form-control" id="floatingInput" placeholder="Event Month"
                                                onChange={handleOnChange} name="eventMonth" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Event description</label>
                                    <textarea className="form-control" id="floatingInput" placeholder="Event Details" onChange={handleOnChange} name="eventDescription" rows="3"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Application Fee</label>
                                    <input type="text" className="form-control" d="floatingInput" placeholder="Application Fee" onChange={handleOnChange} name="eventFee" />
                                </div>

                                <span className="w-50 mx-auto" style={{ display: "block" }}>
                                    <input type="submit" className="btn text-light w-100 text-center" value="Order" style={{ backgroundColor: 'red', color: '#fff' }} />
                                </span>
                                <ToastContainer
                                    position="top-right"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEvent;