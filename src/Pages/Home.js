import React from 'react';
import Banner from './Banner/Banner';
import News from './News/News';
import Request from './Request/Request';
import Navigation from './Shared/Navigation/Navigation';

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