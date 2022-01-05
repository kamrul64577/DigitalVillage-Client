import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyEvents = () => {
    const [event, setEvent] = useState([]);
    
  const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://shielded-falls-80975.herokuapp.com/myEvents/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setEvent(data)})
    },[])

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://shielded-falls-80975.herokuapp.com/registerEvent/${id}`;
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
            <h1 className="text-center pb-2">MY Events</h1>
            <div className="service-page">
                <div className="container py-5 p-3 ">

                    <table className="table">
                        <tr>
                            <th>Event Name</th>
                            
                            <th>TrxId</th>
                           
                            
                            <th>Application Fee</th>
                          

                            <th>Action</th>

                        </tr>
                        {/* <h1>{requestRepairing.length}</h1> */}
                        {
                            event?.map(ev =>
                                <tr>
                                    <td>{ev.eventName}</td>
                                    
                                    <td>{ev.trxId}</td>
                                    
                                    
                                    <td>{ev.eventFee}</td>
                                    


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

export default MyEvents;
