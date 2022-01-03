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
    // console.log(events)
    return (
        <div>
            <Navigation></Navigation>
            {/* {events.map(evnt => evnt.event.eventName)} */}
            <section className="event-section">
                <div className="container pt-5">
                    <div className="row py-0">
                        <div className="col-lg-6 content">
                            <h1>Information About Event</h1>
                            <p> Here you will get all the information about event</p>
                            <p>Event description is given and interested people can apply for different events. You have to apply 2 days before the date of the event.</p>
                            <p>Click on the Apply button on the right, fill out the form and participate in the event.</p>
                        </div>
                        <div className="col-lg-6">
                            {
                                events.map(evnt =>
                                    <div className="card events" style={{ maxWidth: '540px'}}>
                                        <div className="row g-0 align-items-center justify-content-center">
                                            <div className="col-md-4 py-5 text-center time">
                                                <h2>{evnt?.event?.eventDate}<br /><span>{evnt.event.eventMonth}</span></h2>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body details">
                                                    <h4 className="card-title">{evnt?.event?.eventName}</h4>
                                                    <p className="card-text">{evnt?.event?.eventDescription}</p>
                                                    <h6>{evnt?.event?.eventPlace}</h6>
                                                    <Link to={`/registerEvent/${evnt._id}`}>Apply</Link>
                                                    <span>Apply fee:{evnt.event.eventFee}Taka</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Event;