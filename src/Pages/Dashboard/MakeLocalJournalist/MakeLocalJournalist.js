import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const MakeLocalJournalist = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleJournalistSubmit = e => {
        const user = { email };

        fetch('https://shielded-falls-80975.herokuapp.com/users/localJournalist', {
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
                    toast.success('Message\'s sent successfully.', {
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
            <h2 className="pt-5">Add New Journalist </h2>
            <form onSubmit={handleJournalistSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="email "
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Add Journalist </Button>
            </form>
            {
                // success && <Alert severity="success">Sucessfully Add Journalist !</Alert>
                success && <ToastContainer
                    position="top-right"
                />

            }
        </div>
    );
};

export default MakeLocalJournalist;