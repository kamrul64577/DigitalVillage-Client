import React from 'react';
import Banner from './Banner/Banner';
import News from './News/News';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Request from './Request/Request';


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