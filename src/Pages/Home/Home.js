import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
<<<<<<< HEAD:src/Pages/Home/Home.js
import Request from './Request/Request';
import News from './News/News';
=======
import News from './News/News';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Request from './Request/Request';

>>>>>>> 837bc8f780d45046d6588d951d4c82aca314f65e:src/Pages/Home.js

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