import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Axios from 'axios';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { toast, ToastContainer } from 'react-toastify';

const BirthRegistration = () => {
    const [value, setValue] = React.useState(new Date('2021-08-18'));
    const [birthInfo, setBirthInfo] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBirthInfo = { ...birthInfo }
        newBirthInfo[field] = value;
        setBirthInfo(newBirthInfo);

    }

    const handleAddBirth = e => {
        Axios.post('https://shielded-falls-80975.herokuapp.com/birth', {
            birthInfo,
            value

        })
            .then(() => {
                console.log('succesfully Insert')
            });
        toast.success('Birth Registration successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
        });
        e.preventDefault();
    }
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <section className=" py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center  background-shadow bg-light py-5 shadow ">

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 mb-lg-4 mb-3 ">
                                    <h1 className=" text-dark">Birth Information</h1>
                                </div>
                                <form className="px-md-5 px-2" onSubmit={handleAddBirth}>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input onChange={handleOnChange} name="name" type="text" className="form-control rounded-pill" id="floatingInput" placeholder="Name" />
                                            <label>Name</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="fatherName" className="form-control rounded-pill" id="floatingInput" placeholder="Father Name" />
                                            <label>Father Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="motherName" className="form-control rounded-pill" id="floatingInput" placeholder="Mother Name" />
                                            <label>Mother Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="Select Birth Date "
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />

                                                </Stack>
                                            </LocalizationProvider>
                                        </div>

                                        <div className="gender-details">
                                            <label >Gender</label><br /><br />
                                            <input name="gender" type="radio" id="Female" value="Female" onChange={handleOnChange} />
                                            <label>Female</label>
                                            <input type="radio" id="Male" onChange={handleOnChange} name="gender" value="Male" />
                                            <label>Male</label>
                                            <input type="radio" id="Others" onChange={handleOnChange} name="gender" value="Others" />
                                            <label>Others</label><br /><br />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" onChange={handleOnChange} name="address" className="form-control rounded-pill" id="floatingInput" placeholder="Birth Address" />
                                            <label>Birth Address </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" onChange={handleOnChange} name="country" placeholder="Country" />
                                            <label>Country</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" onChange={handleOnChange} name="division" placeholder="Division" />
                                            <label >Division</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" id="floatingInput" onChange={handleOnChange} name="distric" placeholder="District " />
                                            <label>District</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control rounded-pill" onChange={handleOnChange} name="village" id="floatingInput" placeholder="Village" />
                                            <label >Village</label>
                                        </div>

                                        <div className="submit-btn ">
                                            <input type="submit" className="btn btn-primary btn-lg" value="Submit" />

                                        </div>
                                        <ToastContainer
                                            position="top-right"
                                        />
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

export default BirthRegistration;