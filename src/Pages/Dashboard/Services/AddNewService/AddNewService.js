import axios from 'axios';
import React, { useState } from 'react';
import serviceImg from '../../../../images/add-services.jpg'
import { toast, ToastContainer } from 'react-toastify';

const AddNewService = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }

    const handleAddService = () => {
        axios.post('https://shielded-falls-80975.herokuapp.com/services', {
            name: name,
            categories: categories,
            description: description
        })
            .then(res => {
                toast.success('The service\'s added successfully.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                });
            });
    }
    return (
        <>
            <div className="container">
                <div className="row mt-4 align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <h3 className="text-center pt-lg-5 pb-3 theme-color d-block d-lg-none">Add service</h3>
                        <img height="300px" src={serviceImg} alt="" className="img-fluid -w75" /><br />
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3 container-fluid">
                        <h3 className="text-center pt-5 pb-3 theme-color d-none d-lg-block">Add service</h3>
                        <div className="text-start px-0 px-lg-3">
                            <form onSubmit={handleAddService} className="px-4 pb-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Service Name</label>
                                    <input required type="text" className="form-control" placeholder="Service Name" name="name" onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Service Category</label>
                                    <input required type="text" id="Request" className="form-control" name="type" placeholder="What Kind oF Service" onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Event description</label>
                                    <textarea required className="form-control" id="floatingInput" name="whyNeed" placeholder="Description of Service?" onChange={handleOnChange} rows="3"></textarea>
                                </div>

                                <span className="w-50 mx-auto" style={{ display: "block" }}>
                                    <input type="submit" className="btn text-light w-100 text-center" value="Order" style={{ backgroundColor: '#0092e8', color: '#fff' }} />
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

export default AddNewService;