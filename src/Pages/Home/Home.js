import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Request from './Request/Request';
import News from './News/News';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Request></Request>
            <News></News>
        </>
    );
};

export default Home;