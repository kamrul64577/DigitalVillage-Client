import React from 'react';
import './AddReview.css'
import { useForm } from "react-hook-form";
import useFirebase from '../../../../hooks/useFirebase';
import { toast, ToastContainer } from 'react-toastify';


const AddReview = () => {
    const { user } = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://shielded-falls-80975.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('The review\'s added successfully.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                    reset()
                }
            })

    }
    return (
        <>
            <div className="AddReview">
                <h4 className="mt-5 text-center">You Can Add A Review Here</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} readOnly placeholder="user Name" />
                    <textarea {...register("description")} placeholder="Review Message" required />
                    <input {...register("number", { min: 0, max: 5 })} required placeholder="Review rating out of 5" />
                    <input type="submit" value="Add review"/>
                    <ToastContainer
                        position="top-right"
                    />
                </form>
            </div>
        </>
    );
};

export default AddReview;