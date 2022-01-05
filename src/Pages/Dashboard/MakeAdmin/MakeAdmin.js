import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://shielded-falls-80975.herokuapp.com/users/admin', {
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
                    toast.success('Admin created successfully.', {
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
            <h2 className="pt-5">Add New Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="email "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Add Admin</Button>
            </form>
            {
                success && <ToastContainer
                    position="top-right"
                />
            }
        </div>
    );
};

export default MakeAdmin;