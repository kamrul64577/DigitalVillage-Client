import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Event.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';
const Event = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        Axios.get("https://shielded-falls-80975.herokuapp.com/event")
            .then(data => {
                setEvent(data.data)
            })
    }, [])
    console.log(events)
    return (
        <div>
            <Navigation></Navigation>
            {/* {events.map(evnt => evnt.event.eventName)} */}
            <section className="event">
                <div class="leftBox">
                    <div class="content">
                        <h1>Information About Event</h1>
                        <p> Here you will get all the information about event
                        Event description is given and interested people can apply for different events. You have to apply 2 days before the date of the event.
                            Click on the Apply button on the right, fill out the form and participate in the event.</p>
                    </div>
                </div>
                <div class="events">
                    <ul>
                       {
                           events.map(evnt => 
                               <li>
                                   
                                   <div class="time">
                                       <h2>{evnt?.event?.eventDate}<br /><span>{evnt.event.eventMonth}</span></h2>
                                   </div>
                                   <div class="details">
                                       <h3>{evnt?.event?.eventName}</h3>
                                       <p>{evnt?.event?.eventDescription}
                                       </p>
                                       <h6>স্থান: সিলেট স্টেডিয়াম</h6>
                                       <Link to={`/registerEvent/${evnt._id}`}>আবেদন করুন</Link>
                                       <span>আবেদন ফি:{evnt.event.eventFee}টাকা</span>
                                   </div>
                                   <div style={{ clear: 'both' }}></div>
                               </li>
                            )
                       }
                       
                    </ul>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Event;