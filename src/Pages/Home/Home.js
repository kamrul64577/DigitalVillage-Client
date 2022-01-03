import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner/Banner';
import News from './News/News';
import Request from './Request/Request';


const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Request></Request>
            <News></News>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;