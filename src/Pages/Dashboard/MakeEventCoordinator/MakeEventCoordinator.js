import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const MakeEventCoordinator = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://shielded-falls-80975.herokuapp.com/users/eventCoordinator', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                    toast.success('Success', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                }
            })
        e.preventDefault();
    }
    return (
        <div className="pt-5 ps-5">
            <h2 className="pt-5">Add New Event Co-ordinator </h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="Email "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Add Event Co-ordinator</Button>
            </form>
            {
                // success && <Alert severity="success">Sucessfully Add Event Co-ordinator</Alert>
                success && <ToastContainer
                    position="top-right"
                />
            }
        </div>
    );
};

export default MakeEventCoordinator;