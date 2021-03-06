import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
const UpdateService = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState({});

    useEffect(() => {
        const url = `https://shielded-falls-80975.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId]);



    // update title
    const handleNameChange = e => {
        const updateTitle = e.target.value;
        const updateService = { name: updateTitle, categories: services.categories, description: services.description };
        setServices(updateService)
    }
    // update User Email 
    const handleCategoriesChange = e => {
        const updateCategories = e.target.value;
        const updateProduct = { name: services.name, categories: updateCategories, description: services.description };
        setServices(updateProduct)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateProduct = { name: services.name, categories: services.categories, description: updateDescription };
        setServices(updateProduct)
    }

    const handleUpdateService = e => {
        const url = `https://shielded-falls-80975.herokuapp.com/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                    setServices({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2></h2>
            <form onSubmit={handleUpdateService}>
                {/* <input type="text" onChange={handletitleChange} value={services.title || ''} />
                <input type="text" onChange={handlePriceChange} value={services.price || ''} />
                <textarea type="text" onChange={handleDescriptionChange} value={services.description || ''} /> */}

                <TextField
                    onChange={handleNameChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={services.name || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleCategoriesChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={services.categories || ''}
                    type="text"
                    variant="standard"
                />
                <textarea
                    className="form-control"
                    onChange={handleDescriptionChange}
                    style={{ width: '60%', m: 1 }}
                    id="standard-basic"
                    value={services.description || ''}
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>
            </form>
            <ToastContainer
                position="top-right"
            />
        </div>
    );
};

export default UpdateService;
