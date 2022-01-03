import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeEventCoordinator = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://shielded-falls-80975.herokuapp.com/?fbclid=IwAR1FF8lEw2wPTmrGRnMN37kzdExjiuEfmvMj04E4QWHkn8EQJeo0xVgtU4g/users/eventCoordinator', {
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
                success && <Alert severity="success">Sucessfully Add Event Co-ordinator</Alert>

            }
        </div>
    );
};

export default MakeEventCoordinator;