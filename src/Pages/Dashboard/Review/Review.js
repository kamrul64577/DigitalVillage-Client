import React, { useEffect, useState } from 'react';

import './Review.css'
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] =useState()
    useEffect(()=>{
        fetch('https://shielded-falls-80975.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data =>{ 
            
            setReviews(data)})
    },[])
    return (
        <>
       
        <div className="reviews-main">
          <div className="reviews-text-main">
             <div className="reviews-text">
                <p style={{ fontSize:"20px"}} className="text-center">Reviews</p>
                <h3 className="text-center">What Our Client says</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veritatis earum molestias maxime illo nemo iure enim rerum aliquam voluptatibus totam assumenda omnis inventore neque, vitae dolor ratione at provident.</p>
             </div>
          </div>
        <div className="reviews-container">
    
        {
        reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
        }
  </div>
  
   </div>
   </>
    );
};

export default Review;