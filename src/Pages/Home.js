import React from 'react';
import Banner from './Banner/Banner';
import News from './News/News';
import Request from './Request/Request';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Request></Request>
            <News></News>
        </div>
    );
};

export default Home;