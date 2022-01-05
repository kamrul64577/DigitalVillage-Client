import React from 'react';
import AboutRoute from '../AboutRoute/AboutRoute';
import Review from '../Dashboard/Review/Review';
import Navigation from '../Shared/Navigation/Navigation';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner/Banner';
import News from './News/News';



const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            
            <AboutRoute></AboutRoute>
            <Review></Review>
            <News></News>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;