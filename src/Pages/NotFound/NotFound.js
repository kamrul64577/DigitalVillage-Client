import React from 'react';
import NotFoundPic from '../../images/not-found.svg'
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <div className="row">
                <img src={NotFoundPic} alt="" style={{ height: '100vh' }} />
            </div>
            
        </div>
    );
};

export default NotFound;