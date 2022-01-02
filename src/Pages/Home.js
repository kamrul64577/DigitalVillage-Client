import React from 'react';
import Banner from './Home/Banner/Banner';
import News from './Home/News/News';
import Request from './Home/Request/Request';
import Navigation from './Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Request></Request>
            <News></News>
        </div>
    );
};

export default Home;