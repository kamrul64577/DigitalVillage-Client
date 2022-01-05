import React ,{ useEffect , useState}from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
import Navigation from '../../Shared/Navigation/Navigation';


import './ServiceBooking.css'
const ServiceBooking = () => {
    const {user} =useFirebase()
    const {serviceId} = useParams();
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://shielded-falls-80975.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{ 
             console.log(data)
             setServices(data)
            
        })
    },[])

    const exactItem = services?.filter(pd => pd._id === serviceId)

     const serviceName= exactItem[0]?.name
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status= "pending";
        fetch('https://shielded-falls-80975.herokuapp.com/ServiceBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            data.name= serviceName
            if(data.insertedId){
                alert("successfully booked")
             reset()
         }
        })
        console.log(data);
        
       

};
    return (
        <>
      
        <div className="place-order-bg" style={{ backgroundImage: `url(${exactItem[0]?.img})`,backgroundRepeat: 'no-repeat' }}>
        <Navigation></Navigation>
        <div className="booking-main ">
        
<div className="booking-details ">

    
<div className="booking-text">
<h1> {exactItem[0]?.name}</h1> 
<p>{exactItem[0]?.description} </p> 

</div>


<div className="booking-form">

<form onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={(user?.displayName)} {...register("name")} />
<input defaultValue={user?.email}  {...register("email")} />

 {
     exactItem[0]?.name && <input defaultValue={exactItem[0]?.name}  {...register("carName")} />
 }
 {
  exactItem[0]?.img &&  <input defaultValue={exactItem[0]?.img} {...register("carImg")} />
 }
 { 
 exactItem[0]?.description &&  <input defaultValue={exactItem[0]?.description} {...register("description")} />
 
 }

    <input   {...register("address")} placeholder="Address"/>
    <input   {...register("phone")} placeholder="Phone Number"/>
  <button className="place-order-btn"type="submit">Confirm Book</button>
  

</form>
</div>

</div >

</div>
    </div>
    </>
    );
};

export default ServiceBooking;