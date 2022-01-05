import Axios from 'axios';
import React, { useState } from 'react'
import Navigation from '../Shared/Navigation/Navigation';


import './RepairApplication.css'
export default function RepairApplication() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [requestFor, setRequestFor] = useState('');
    const [description, setDescription] = useState('');

    const requestRepair = () => {
        Axios.post('https://shielded-falls-80975.herokuapp.com/insertRepair', {
            name: name,
            email: email,
            contact: contact,
            requestFor: requestFor,
            description: description
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('thank you for your new Service request')
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="repair-texts">
              <div>
                <p>Repair</p>
        <h3>You can apply for repair anything in your village like Roads, Houses Etc</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quam et ratione repellendus hic porro ea. Dolorem ratione assumenda officiis laboriosam eos commodi ipsum distinctio fugiat eligendi, impedit temporibus culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum ducimus nesciunt sint amet, quasi consequuntur totam recusandae illum numquam!</p>
            </div>
            </div>
            <section className="request_for_installment">
                
                <h1 className="title mb-5"> Application for Repair </h1>
                <div className="container">
                    <div className="contact-form row">
                        <div className="form-field col-lg-6">
                            <textarea id="name" className="input-text" type="text" name="name" onChange={(e) => {
                                setName(e.target.value)
                            }}></textarea>
                            <label for="name" className="label">Your Name</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="email" className="input-text" type="email" name="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}></textarea>
                            <label for="email" className="label">Your Email</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="Request" className="input-text" type="text" name="requestFor" onChange={(e) => {
                                setRequestFor(e.target.value)
                            }}> </textarea>
                            <label for="Request" className="label">Applying For Repairing What ?</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="phone" className="input-text" type="text" name="contact" onChange={(e) => {
                                setContact(e.target.value)
                            }}> </textarea>
                            <label for="phone" className="label">Your Mobile Number</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <textarea id="message" className="input-text" type="text" name="description" onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                            <label for="message" className="label">Why this service is necessary to you?</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Apply" onClick={requestRepair} />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}