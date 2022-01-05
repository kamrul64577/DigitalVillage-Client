import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

import './MyServiceBooking.css'
import MySingleServiceBooking from './MySingleServiceBooking/MySingleServiceBooking';
const MyServiceBooking = () => {
  const { user, isLoading } = useAuth();
  const [myAllServiceBooking, setMyAllServiceBooking] = useState([])
  useEffect(() => {
    fetch(`https://shielded-falls-80975.herokuapp.com/myServiceBooking/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMyAllServiceBooking(data)
      })
  }, [user?.email])
  console.log(myAllServiceBooking)
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?')

    if (proceed) {
      const url = (`https://shielded-falls-80975.herokuapp.com/order/${id}`)
      fetch(url, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success('Deleted successfully', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
            });
            const remaining = myAllServiceBooking.filter(order => order._id !== id)
            setMyAllServiceBooking(remaining)
          }
        })

    }
  }
  if (isLoading) {
    return <div className="spinner">
      <div >
        <div className="spinner-border " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  }
  return (
    <>
      <div className="my-all-booking ">
        <h4 className="text-center mt-5 fw-bolder"> Welcome  <span className="fst-italic text-primary">{user?.displayName} </span></h4>
        <h4 className="text-center mt-1 fw-bolder"> Your All Bookings</h4>
        <div className="my-booking">
          {
            myAllServiceBooking?.map(mySingleOrder => <MySingleServiceBooking key={mySingleOrder._id} handleDelete={handleDelete} mySingleOrder={mySingleOrder}></MySingleServiceBooking>)
          }
        </div>
        <ToastContainer
          position="top-right"
        />
      </div>
    </>
  );


};

export default MyServiceBooking;