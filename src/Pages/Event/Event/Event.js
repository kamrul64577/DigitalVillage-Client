import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Event.css'

const Event = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        fetch("https://shielded-falls-80975.herokuapp.com/event")
            .then(res => res.json())
            .then(data => {
                setEvent(data)
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className="event-section pb-4">
                <div className="container">
                    <div className="mb-5 mt-5 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <h1 className="text-center text-light">Information About Event</h1>
                        <p className="text-center text-light"> Here you will get all the information about event</p>
                        <p className="text-center text-light">Event description is given and interested people can apply for different events. You have to apply 2 days before the date of the event.</p>
                        <p className="text-center text-light">Click on the Apply button on the right, fill out the form and participate in the event.</p>
                    </div>
                    {/* {
                        events.map(evnt =>
                            <div className="card events border border-0 my-2" key={evnt._id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.58)' }}>
                                <div className="row g-0 align-items-center justify-content-center">
                                    <div className="col-md-4 col-12 py-3 py-lg-5 text-center time">
                                        <h2>{evnt.event.eventDate}<br /><span>{evnt.event.eventMonth}</span></h2>
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <div className="card-body details">
                                            <h4 className="card-title">{evnt.event.eventName}</h4>
                                            <p className="card-text">{evnt.event.eventDescription}</p>
                                            <h6>{evnt?.event?.eventPlace}</h6>
                                            <Link to={`/registerEvent/${evnt._id}`}>Apply</Link>
                                            <span>Apply fee:{evnt.event.eventFee}Taka</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } */}
                    <div className="row align-items-center">
                        {
                            events.map(evnt =>
                                <div className="col-lg-6 col-12" key={evnt._id}>
                                    <div class="card border border-0 w-100 events mb-3 h-100" style={{backgroundColor: 'rgba(255, 255, 255, 0.58)'}}>
                                        <div class="row align-items-center justify-content-center border border-0 g-0" key={evnt._id}>
                                            <div class="col-md-4 h-100 py-5 time">
                                                <h2>{evnt.event.eventDate}<br /><span>{evnt.event.eventMonth}</span></h2>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body details">
                                                    <h5 class="card-title">{evnt.event.eventName}</h5>
                                                    <p class="card-text">{evnt.event.eventDescription.slice(0, 180)}</p>
                                                    <h6><span className="fw-bold">Venue:</span> {evnt?.event?.eventPlace}</h6>
                                                    <Link to={`/registerEvent/${evnt._id}`}>Apply</Link>
                                                    <span className="event-fee">Apply fee:{evnt.event.eventFee}Taka</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }</div>
                </div>
            </div>
        </div>
    );
};

export default Event;