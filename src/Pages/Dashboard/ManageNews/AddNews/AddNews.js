import React, { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
const AddNews = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleAddNews = e => {
        Axios.post('https://shielded-falls-80975.herokuapp.com/insertNews', {
            title,
            image,
            description
        })
            .then(() => {
                console.log('Successfully insert')
            });
        toast.success('News added successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
        });
        e.preventDefault();
    }

    return (
        <div className="bg-light">
            <h1 className="text-center py-3">Add New News</h1>
            <form onSubmit={handleAddNews} className="w-75 mx-auto">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" onChange={(e) => {
                        setTitle(e.target.value)
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Img Url</label>
                    <input type="text" className="form-control" name="image" onChange={(e) => {
                        setImage(e.target.value)
                    }} />
                </div>
                <div className="mb-3 form-check">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className="form-control" onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ToastContainer
                position="top-right"
            />
        </div>
    );
};

export default AddNews;