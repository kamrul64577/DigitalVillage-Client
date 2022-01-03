import axios from 'axios';
import React, { useState } from 'react';
import eventImg from '../../../../images/E.jpg'
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
                console.log('Successfully Insert')
            });
        alert('Event added successfully')
        e.preventDefault();
    }
    return (
        <div>
            <section className="container-fluid  main-wrapper py-5">
                <div className="container">
                    <div className="row d-flex align-items-center rounded-pill bg-white shadow p-5">
                        <div className="col-md-6 p-0">
                            <img src={eventImg} alt="Event-img" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 mb-lg-4 mb-3 px-md-5">
                                    <h1 className="text-md-start text-center">Add Event</h1>
                                </div>
                                <form onSubmit={handleAddEvent} className="px-md-5 px-2">
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Event Name" onChange={handleOnChange} name="eventName" />
                                            <label for="floatingInput">Event Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Event Venue" onChange={handleOnChange} name="eventPlace" />
                                            <label for="floatingInput">Event Venue</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Event Date" onChange={handleOnChange} name="eventDate" />
                                            <label for="floatingInput">Event Date</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Event Month"
                                                onChange={handleOnChange} name="eventMonth" />
                                            <label for="floatingInput">Event Month</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Application Fee" onChange={handleOnChange} name="eventFee" />
                                            <label for="floatingInput">Application Fee</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Event Details" onChange={handleOnChange} name="eventDescription" />
                                            <label for="floatingInput">Event Details </label>
                                        </div>

                                        <div className="submit-btn ">
                                            <input type="submit" className="btn btn-primary btn-lg" value="Add" />

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AddEvent;