import React from 'react';
import Banner from './Home/Banner/Banner';
import News from './Home/News/News';
import Request from './Home/Request/Request';
import Navigation from './Shared/Navigation/Navigation';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Request></Request>
            <News></News>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;